import re
import json
import subprocess
from typing import Dict


def enum_cache_modified_after_optimization(js_code: str) -> bool:
    """
    Detects potential enum cache corruption patterns caused by modifying
    an object with similar shape after optimization of an iteration function.
    """

    # 1. Detect property iteration (e.g., for-in loops)
    enum_cache_priming = re.findall(r'for\s*\(\s*(?:let|var)?\s*\w+\s+in\s+(\w+)\s*\)', js_code)
    if not enum_cache_priming:
        return False

    iterated_object = enum_cache_priming[0]

    # 2. Detect optimization triggers
    optimization_lines = [
        line for line in js_code.splitlines()
        if '%Optimize' in line or '%PrepareFunctionForOptimization' in line
    ]
    if not optimization_lines:
        return False

    # 3. Detect a callback or inner function that mutates another object (e.g., object3.p9 = 1.1)
    mutation_match = re.search(r'\b(\w+)\.\w+\s*=\s*[^=]', js_code)
    if not mutation_match:
        return False

    mutated_object = mutation_match.group(1)

    # Heuristic: if the mutated object is not the one iterated, and optimization is applied, it's a likely risk
    if mutated_object != iterated_object:
        return True

    return False

def detect_callback_in_optimized_enumeration(js_code: str) -> bool:
    if not re.search(r'%Optimize(Function|Maglev)OnNextCall\s*\(', js_code):
        return False

    callback_patterns = [
        r'\w+\s*\(\s*function\s*\([^)]*\)\s*\{[^}]*\}\s*\)',   # trigger(function(...) {...})
        r'\w+\s*\(\s*\(\s*\w*\s*\)\s*=>\s*\{[^}]*\}\s*\)'       # trigger((x) => {...})
    ]
    modifies_obj = r'\w+\s*\.\s*\w+\s*=\s*[^;]+'

    for pattern in callback_patterns:
        matches = re.findall(pattern, js_code, re.DOTALL)
        for match in matches:
            if re.search(modifies_obj, match):
                return True
    return False

def extract_young_space_assignments(js_code: str) -> bool:
    """
    Detects young space assignments, including:
    - Variable allocations in young space (e.g., {}, [], new Array(), Utils.CreateObject())
    - Assignments to object properties of those variables
    - Use of allocated vars in Object.assign
    """

    # Normalize code by removing comments
    js_code = re.sub(r'//.*?$|/\*.*?\*/', '', js_code, flags=re.DOTALL | re.MULTILINE)

    # Step 1: Find variable allocations
    allocated_vars = set()
    var_allocs = re.findall(
        r'\b(?:let|var|const)\s+(\w+)\s*=\s*(?:\{\s*\}|\[\s*\]|new\s+(?:Object|Array)\s*\([^)]*\)|Utils\.CreateObject\s*\([^)]*\))',
        js_code
    )
    allocated_vars.update(var_allocs)

    # Step 2: Also find multiple declarations in one line
    multi_var_allocs = re.findall(
        r'\b(?:let|var|const)\s+([^;]+);', js_code
    )
    for decl in multi_var_allocs:
        for varname, rhs in re.findall(r'(\w+)\s*=\s*(\{[^}]*\}|\[[^\]]*\]|new\s+(?:Object|Array)\s*\([^)]*\)|Utils\.CreateObject\s*\([^)]*\))', decl):
            allocated_vars.add(varname)

    # Step 3: Check property assignments
    prop_assigns = re.findall(r'(\w+)\s*\.\s*\w+\s*=', js_code)
    if any(lhs in allocated_vars for lhs in prop_assigns):
        return True

    # Step 4: Object.assign involving allocated vars
    obj_assigns = re.findall(r'Object\.assign\s*\(\s*(\w+)\s*,\s*(\w+)\s*\)', js_code)
    if any(t in allocated_vars or s in allocated_vars for t, s in obj_assigns):
        return True

    return False



def extract_deep_object_assign(js_code: str) -> bool:
    """
    Detects deep Object.assign() usage:
    - Target or source is a variable (not a literal or empty object)
    - Suggests object-to-object assignment, not shallow copying
    """

    # Find all Object.assign(target, source)
    assign_calls = re.findall(r'Object\.assign\s*\(\s*([^\s,(){}[\]]+)\s*,\s*([^\s,(){}[\]]+)\s*\)', js_code)

    for target, source in assign_calls:
        # Check if either is not a literal (not {}, [], or literals like 1, "x")
        literal_pattern = re.compile(r'^(?:\{\}|\[\]|\d+|".*?"|\'.*?\'|null|undefined|true|false)$')

        is_target_literal = bool(literal_pattern.match(target.strip()))
        is_source_literal = bool(literal_pattern.match(source.strip()))

        if not is_target_literal and not is_source_literal:
            # Both sides are non-literals → definitely deep
            return True
        elif not is_target_literal or not is_source_literal:
            # One side is non-literal → likely deep
            return True

    return False

def extract_gc_features(js_code: str):
    """Extract GC-related features: count, timing pattern including major/minor/manual."""
    gc_timing_pattern = re.findall(r'gc\s*\(\s*{[^}]*type\s*:\s*"([^"]+)"', js_code)
    manual_gc_count = len(re.findall(r'\bgc\s*\(\s*\)', js_code))
    total_gc_count = len(gc_timing_pattern) + manual_gc_count
    if manual_gc_count > 0:
        gc_timing_pattern.extend(['manual'] * manual_gc_count)
    return total_gc_count

def extract_allocation_pressure(js_code: str):
    """Detect overall and loop-based allocation pressure."""
    top_allocs = len(re.findall(r'(new\s+(?:Array|Object)|\{\s*\}|\[\s*\])', js_code))
    loop_bodies = re.findall(r'for\s*\([^)]*\)\s*{(.*?)}', js_code, re.DOTALL)
    loop_allocs = sum(len(re.findall(r'(new\s+(?:Array|Object)|\{\s*\}|\[\s*\])', body)) for body in loop_bodies)
    allocation_pressure = (top_allocs + loop_allocs) >= 3
    return allocation_pressure

def detect_write_barrier_risk(js_code: str) -> bool:
    optimized = '%Optimize' in js_code
    has_gc = bool(re.search(r'\bgc\s*\(', js_code))

    # Detect allocated objects (simple object/array allocations)
    object_allocs = set(re.findall(r'\b(?:let|var|const)\s+(\w+)\s*=\s*\{[^}]*\}', js_code))
    array_allocs = set(re.findall(r'\b(?:let|var|const)\s+(\w+)\s*=\s*new\s+Array', js_code))
    young_candidates = object_allocs | array_allocs

    # Case 1: Object.assign usage
    assigns = re.findall(r'Object\.assign\s*\(\s*(\w+)\s*,\s*(\w+)\s*\)', js_code)
    for target, source in assigns:
        if source in young_candidates or target in young_candidates:
            if optimized and has_gc:
                return True

    # Case 2: Property assignments: obj.x = young_object
    prop_assigns = re.findall(r'(\w+)\.(\w+)\s*=\s*(\w+)', js_code)
    for obj, prop, rhs in prop_assigns:
        if rhs in young_candidates and optimized and has_gc:
            return True

    return False

def extract_additional_lifecycle_features(js_code: str) -> dict:
    features = {}

    # FinalizationRegistry usage
    features['uses_finalization_registry'] = bool(re.search(r'\bFinalizationRegistry\b', js_code))

    # Target object being nulled or undefined after registration
    features['registers_gced_object'] = (
        'register(' in js_code and
        bool(re.search(r'\btarget\s*=\s*undefined\b', js_code))
    )

    # Cleanup token is mutated (via Object.assign or prop set)
    token_mutation = re.search(r'\b(unreg_token|token|cleanup|key)\b.*(=|Object\.assign)', js_code)
    features['assigns_to_cleanup_token'] = bool(token_mutation)

    # Cleanup token used then modified (register + assign)
    features['cleanup_token_mutated_after_register'] = (
        'register(' in js_code and
        bool(token_mutation)
    )

    # GC happens after token mutation
    lines = js_code.splitlines()
    token_modified_line = next((i for i, l in enumerate(lines) if re.search(r'(unreg_token|token|key).*=', l)), -1)
    gc_line = next((i for i, l in enumerate(lines) if 'gc({' in l), -1)
    features['gc_after_mutating_key'] = token_modified_line >= 0 and gc_line > token_modified_line

    # Loop contains token mutation
    features['looped_token_mutation'] = bool(re.search(r'for\s*\(.*?\)\s*{[^}]*Object\.assign\((unreg_token|token|key),', js_code, re.DOTALL))

    # Finalizer hint (e.g., print inside cleanup)
    features['finalization_registry_cleanup_triggered'] = bool(re.search(r'FinalizationRegistry\([^)]*CleanUp[^)]*\)', js_code)) or 'print("CleanUp")' in js_code

    # Token used as key then modified
    features['token_used_as_key_then_invalidated'] = (
        bool(re.search(r'register\s*\(\s*\w+\s*,\s*\w+\s*,\s*(unreg_token|token|key)\)', js_code)) and
        bool(re.search(r'(unreg_token|token|key)\.\w+\s*=', js_code))
    )

    return features

def extract_all_features_generic(js_code: str) -> dict:
    gc_types = re.findall(r'gc\s*\(\s*{[^}]*type\s*:\s*"([^"]+)"\s*}\s*\)', js_code)
    object_assigns = re.findall(r'Object\.assign\(([^,]+),\s*([^)]+)\)', js_code)
    circular_refs = re.findall(r'(\w+)\.f\s*=\s*\1', js_code)
    loops = re.findall(r'for\s*\(.*?\)\s*{[^}]*}', js_code, re.DOTALL)

    # Look for variable assignments (e.g., `let mark_obj = {}` or `var x = {}`)
    allocations = re.findall(r'\b(?:let|var|const)\s+(\w+)\s*=\s*{[^}]*}', js_code)
    
    
    # Detect functions that use Object.assign where the target is one of the above allocations
    #assigned_young_objects = any(
    #    target.strip() in allocations for target, _ in object_assigns
    #)

    assigned_young_objects = extract_young_space_assignments(js_code)
    loop_alloc_object = any("new Object" in loop or "={}" in loop or "new Array" in loop for loop in loops)
    loop_large_alloc = any(re.search(r'new\s+Array\s*\(\s*0x[0-9a-fA-F]+|\d{4,}', loop) for loop in loops)
    alloc_count = sum(loop.count("new") + loop.count("={}") for loop in loops)
    high_alloc_density = alloc_count >= 3
    loop_blocks = re.findall(r'for\s*\([^)]*\)\s*{(.*?)}', js_code, re.DOTALL)
    loop_dynamic_props = any(
        re.search(r'\w+\s*\[\s*[^]]+\s*\]\s*=', block) for block in loop_blocks
    )
    return {
        'gc_invocations': max(len(gc_types),len(re.findall(r'\bgc\s*\(\s*\)', js_code))),
        'gc_timing_pattern': extract_gc_features(js_code)[1],
        'forced_incremental_gc' : (
            "minor" in gc_types and (loop_large_alloc or high_alloc_density)
        ) or (
            alloc_count >= 5 and loop_large_alloc  # No gc() seen, but clearly memory-stressing
        ),
        'allocation_pressure': extract_allocation_pressure(js_code),
        'uses_allow_natives_syntax': "%" in js_code,
        'has_maglev_or_turbofan_opt': "%OptimizeMaglevOnNextCall" in js_code,
        'opt_function_with_gc_overlap': (
            "%PrepareFunctionForOptimization" in js_code and
            "%OptimizeMaglevOnNextCall" in js_code and
            any(t in gc_types for t in ["major", "minor"])
        ),
        'circular_reference_detected': bool(circular_refs),
        'deep_object_assign': extract_deep_object_assign(js_code),
        'assignments_to_young_space_objects': assigned_young_objects,
        #'missing_write_barrier_patterns': (
        #    "Object.assign" in js_code and "%OptimizeMaglevOnNextCall" in js_code
        #),
        'missing_write_barrier_patterns': detect_write_barrier_risk(js_code),
        'enum_cache_modified_after_optimization': enum_cache_modified_after_optimization(js_code),
        'callback_modifies_object_during_enum_loop': detect_callback_in_optimized_enumeration(js_code),
        #'object_property_growth_rate': any(
        #    re.search(r'\b\w+\[\w+\]\s*=\s*{', loop) for loop in loops
        #),
        'object_property_growth_rate' : bool(re.search(r'\b\w+\s*\[\s*[^]]+\s*\]\s*=', js_code)),
        'loop_count_high_alloc': loop_large_alloc,
        'function_complexity_score': js_code.count("function") + js_code.count(".f =") + js_code.count("Object.assign"),
        'debugprint_call_count': js_code.count("%DebugPrint"),
        'use_of_uncommon_runtime_hooks': any(fn in js_code for fn in [
            "%DebugPrint", "%SystemBreak", "%OptimizeMaglevOnNextCall", "%PrepareFunctionForOptimization"
        ])
    }
def extract_jit_confusion_features(js_code: str) -> dict:
    features = {}

    # 1. Detect use of JIT optimization intrinsics
    features['uses_jit_optimization_intrinsics'] = any(
        x in js_code for x in ['%OptimizeFunctionOnNextCall', '%OptimizeMaglevOnNextCall', '%PrepareFunctionForOptimization']
    )

    # 2. Detect if a function is called with multiple input types (simple static heuristic)
    func_calls = re.findall(r'(\w+)\s*\(\s*([^)]+)\s*\)', js_code)
    call_types = {}
    for name, arg in func_calls:
        if re.match(r'\d+$', arg):
            arg_type = 'number'
        elif re.match(r'".*?"|\'.*?\'', arg):
            arg_type = 'string'
        elif arg.strip() in ['true', 'false']:
            arg_type = 'bool'
        elif arg.strip() == '{}':
            arg_type = 'object'
        elif arg.strip() == '[]':
            arg_type = 'array'
        elif arg.strip() in ['undefined', 'null']:
            arg_type = 'nullish'
        else:
            arg_type = 'unknown'
        call_types.setdefault(name, set()).add(arg_type)

    features['function_called_with_multiple_type_signatures'] = any(
        len(arg_types) > 1 for arg_types in call_types.values()
    )

    # 3. Detect access to parameter after return (retained in IR)
    features['parameter_read_after_return'] = bool(re.search(
        r'return[^;]*;[^}]*?\(\(\)\s*=>\s*{[^}]*\b[a-zA-Z_]\w*\b[^}]*}', js_code, re.DOTALL))

    # 4. Detect branching on input type or falsy value
    features['optimized_function_with_branching_on_input_type'] = bool(re.search(
        r'if\s*\(\s*(typeof\s+\w+|!\s*\w+|\w+\s*==\s*\w+)\s*\)', js_code))

    # 5. Detect function that directly returns the input parameter
    features['returns_param_directly'] = bool(re.search(
        r'return\s+\w+\s*;', js_code)) and not bool(re.search(r'return\s+\w+\s*[\+\-\*/]', js_code))

    return features

def extract_wasm_features(js_code: str) -> dict:
    features = {}

    # 1. Wasm fuzzing entry point
    features['uses_wasm_module_builder'] = 'WasmModuleBuilder' in js_code

    # 2. RefCast / CallRef or GCPrefix instruction use
    features['uses_ref_cast_or_call_ref'] = any(
        x in js_code for x in ['kExprRefCast', 'kExprCallRef', 'kGCPrefix']
    )

    # 3. WebAssembly.Function used as an import
    features['webassembly_function_used_as_import'] = (
        'WebAssembly.Function' in js_code and 'instantiate({' in js_code
    )

    # 4. Signature-based linking on JS side
    features['uses_js_wasm_signature_linking'] = bool(
        re.search(r'\{\s*parameters\s*:\s*\[.*?\]\s*,\s*results\s*:\s*\[.*?\]\s*\}', js_code, re.DOTALL)
    )

    # 5. Calls exported Wasm function with constant input
    features['calls_exported_wasm_function_with_constant'] = bool(
        re.search(r'\.\s*exports\s*\.\s*\w+\s*\(\s*(\d+|true|false|null|undefined|{})\s*\)', js_code)
    )

    # 6. JSPI feature flags (d8-specific)
    features['enables_jspi_features'] = (
        'd8.test.enableJSPI()' in js_code or 'installConditionalFeatures' in js_code
    )

    # 7. Manual Wasm table usage
    features['manual_wasm_table_usage'] = any(
        x in js_code for x in ['addTable(', 'kWasmAnyFunc', 'kExprTableGet', 'kExprTableSet']
    )

    return features

def extract_scalar_jit_features(js_code: str) -> dict:
    features = {}

    # 1. Global variable reassigned and used inside optimized function
    features['uses_global_variable_in_optimized_function'] = (
        bool(re.search(r'let\s+\w+\s*=\s*\d+', js_code)) and
        bool(re.search(r'function\s+\w+\s*\(\)\s*{[^}]*=\s*\w+\s*;', js_code))
    )

    # 2. Loop with nested switch using scalar mutation
    features['loop_nested_switch_on_scalar'] = (
        'for' in js_code and 'switch' in js_code and
        bool(re.search(r'case\s+\d+\s*:', js_code))
    )

    # 3. Scalar reassignment inside switch case
    features['scalar_assigned_in_switch_case'] = bool(
        re.search(r'case\s+\d+\s*:\s*\s*\w+\s*=\s*\w+\s*;', js_code)
    )

    # 4. Optimized function contains no object/array allocations (scalar-only)
    features['no_object_allocation_in_optimized_function'] = (
        '%Optimize' in js_code and not any(x in js_code for x in ['{}', 'new ', 'Object(', 'Array('])
    )

    # 5. Optimization applied on control-heavy (loop + switch) structure
    features['optimizes_control_flow_only'] = (
        '%Optimize' in js_code and 'for' in js_code and 'switch' in js_code
    )

    return features

def extract_js_wasm_promising_features(js_code: str) -> dict:
    features = {}

    # 1. Use of WebAssembly.promising
    features['uses_webassembly_promising'] = 'WebAssembly.promising' in js_code

    # 2. Use of Uint8Array to define a Wasm binary
    features['uses_embedded_wasm_binary'] = (
        'Uint8Array' in js_code and 'WebAssembly.Module' in js_code
    )

    # 3. Wasm instantiated with a JS import function
    features['imports_js_function_into_wasm'] = bool(
        re.search(r'WebAssembly\.Instance\s*\([^,]+,\s*{[^}]*:\s*\(\s*\)\s*=>', js_code)
    )

    # 4. Promising called without parameters/results signature
    features['calls_promising_export_without_signature_info'] = (
        'WebAssembly.promising' in js_code and
        not re.search(r'{\s*parameters\s*:\s*\[.*?\]\s*,\s*results\s*:\s*\[.*?\]\s*}', js_code, re.DOTALL)
    )

    # 5. Direct call of a promising-wrapped Wasm export
    features['wasm_exported_function_called_directly'] = bool(
        re.search(r'WebAssembly\.promising\([^)]+\)\s*;.*?\w+\s*\(\)', js_code, re.DOTALL)
    )

    return features

def extract_regexp_proxy_features(js_code: str) -> dict:
    features = {}

    # Check if Proxy is applied to RegExp-like objects
    features['uses_proxy_on_regex_like_object'] = bool(
        re.search(r'(ProxyConstructor|new\s+Proxy)\s*\(\s*[^,]*RegExp', js_code)
        or re.search(r'Proxy\s*\(\s*/', js_code)
        or ('Proxy' in js_code and 'RegExp' in js_code and 'probe' in js_code)
    )

    return features

def extract_wasm_type_confusion_features(js_code: str) -> dict:
    features = {}

    # 1. Detect class declarations
    class_names = re.findall(r'class\s+(\w+)\s*(?:extends\s+\w+)?\s*{', js_code)

    # 2. Check if any class name is used as a Wasm import in `func: className`
    features['wasm_imported_function_is_not_callable'] = any(
        re.search(r'func\s*:\s*' + re.escape(name) + r'\b', js_code) for name in class_names
    )

    # 3. Match specific pattern of wasm import using constructor
    features['wasm_import_used_as_constructor'] = any(
        re.search(r'instantiate\(\s*{[\s\S]*?func\s*:\s*' + re.escape(name), js_code) for name in class_names
    )

    # 4. Detect export names added via WasmModuleBuilder
    export_names = re.findall(r'\.addExport\s*\(\s*[\'"](\w+)[\'"]\s*,', js_code)

    # 5. Detect function calls to those export names, generic for both dot and bracket notation
    call_lines = re.findall(r'(\w+)\s*(?:\[\s*[\'"](\w+)[\'"]\s*\]|\.(\w+))\s*\(\s*(.*?)\s*\)', js_code)
    call_counts = {}
    for obj, name_bracket, name_dot, arg in call_lines:
        name = name_bracket or name_dot
        if name in export_names:
            key = (obj, name, arg.strip())
            call_counts[key] = call_counts.get(key, 0) + 1

    features['calls_wasm_export_twice_with_same_input'] = any(v > 1 for v in call_counts.values())

    return features


def extract_wasm_signature_confusion_general(js_code: str) -> dict:
    features = {}

    # 1. Wraps a Wasm export in a JS API (e.g., WebAssembly.promising, Function, etc.)
    features['wraps_wasm_export_with_js_api'] = bool(
        re.search(r'(WebAssembly\.\w+|Function)\s*\([^)]*exports\.', js_code)
    )

    # 2. Calls the wrapped Wasm export directly (e.g., WebAssembly.promising(...)(...))
    features['calls_wrapped_export_directly'] = bool(
        re.search(r'(WebAssembly\.\w+|Function)\s*\([^)]*\)\s*\(', js_code)
    )

    # 3. Lacks parameter/result signature metadata for wrapping
    features['lacks_signature_metadata_for_wrap'] = not bool(
        re.search(r'\{\s*parameters\s*:\s*\[.*?\].*?results\s*:\s*\[.*?\]', js_code, re.DOTALL)
    )

    # 4. Tries to wrap an export without checking the signature
    features['wraps_export_without_type_check'] = (
        features['wraps_wasm_export_with_js_api'] and
        features['lacks_signature_metadata_for_wrap']
    )

    # 5. Calls the same Wasm export multiple times (dot or bracket notation)
    export_calls = re.findall(r'\.exports(?:\[\s*[\'"](\w+)[\'"]\s*\]|\.(\w+))\s*\(', js_code)
    flat_calls = [a or b for a, b in export_calls]
    repeated_exports = [x for x in flat_calls if flat_calls.count(x) > 1]
    features['calls_exported_function_twice'] = len(repeated_exports) > 0

    return features
def extract_js_wasm_wrap_general(js_code: str) -> dict:
    features = {}

    # 1. Wraps a Wasm export in any JS function (e.g., ToPromising(exports.main))
    features['wraps_wasm_export_in_js_function'] = bool(
        re.search(r'\b\w+\s*\(\s*.*?exports\.(\w+)', js_code)
    )

    # 2. Wrapper immediately invoked (e.g., wrap(...)(...))
    features['wrapped_export_invoked_as_function'] = bool(
        re.search(r'\b\w+\s*\(\s*.*?exports\.\w+\s*\)\s*\(', js_code)
    )

    # 3. Wrapper lacks signature metadata
    features['wraps_export_without_signature_metadata'] = not bool(
        re.search(r'{\s*parameters\s*:\s*\[.*?\]\s*,\s*results\s*:\s*\[.*?\]', js_code, re.DOTALL)
    )

    return features

def extract_wasm_crash_indicators(js_code: str) -> Dict[str, object]:
    features = {}

    # Feature 1: has_wasm
    features["has_wasm"] = "WebAssembly.Module" in js_code or "WebAssembly.Instance" in js_code

    # Feature 2: wasm_bytes_len (extract Uint8Array byte array length)
    wasm_bytes = re.search(r'new Uint8Array\(\[([^\]]+)\]\)', js_code, re.DOTALL)
    if wasm_bytes:
        byte_list = wasm_bytes.group(1).split(',')
        features["wasm_bytes_len"] = len(byte_list)
    else:
        features["wasm_bytes_len"] = 0

    # Feature 3: uses_optimization_directives
    features["uses_optimization_directives"] = any(
        directive in js_code for directive in [
            "%OptimizeFunctionOnNextCall", "%PrepareFunctionForOptimization", "%DeoptimizeFunction"
        ]
    )

    # Feature 4: wasm_optimized
    features["wasm_optimized"] = features["has_wasm"] and features["uses_optimization_directives"]

    # Feature 5: num_exported_funcs (basic heuristic: count ".exports.")
    features["num_exported_funcs"] = js_code.count(".exports.")

    # Feature 6: builtins_declared_count
    builtins_match = re.search(r'builtins\s*:\s*\[([^\]]*)\]', js_code)
    if builtins_match:
        builtin_list = builtins_match.group(1).split(',')
        features["builtins_declared_count"] = len([b for b in builtin_list if b.strip()])
    else:
        features["builtins_declared_count"] = 0

    return features

def extract_reflect_proxy_recursion_patterns(js_code: str) -> dict:
    """
    General pattern extractor for crash-prone JavaScript behavior.
    """

    def has_dynamic_constructor_dispatch(code):
        return bool(re.search(r'\bconstruct\s*\([^,]+,\s*\[[^\]]*\]\s*,\s*\w+\)', code)) or \
               bool(re.search(r'\.apply\s*\([^)]*\)', code))

    def has_recursive_generator_or_try(code):
        return bool(re.search(r'function\s*\*\s*\w*\s*\(.*\).*yield\s*\*', code, re.DOTALL)) or \
               bool(re.search(r'function\s+(?P<name>\w+)\s*\([^)]*\)\s*{[^}]*\b(?P=name)\s*\([^)]*\)', code, re.DOTALL))

    def has_property_enumeration_and_mutation(code):
        lines = code.splitlines()
        for i, line in enumerate(lines):
            if re.search(r'\bfor\s*\(\s*\w+\s+in\s+\w+\s*\)', line) or \
               re.search(r'getOwnPropertyNames|getOwnPropertyDescriptor', line):
                window = "\n".join(lines[i:i+5])
                if re.search(r'\w+\s*\.\s*\w+\s*=', window) or 'defineProperty' in window:
                    return True
        return False

    return {
        'dynamic_constructor_dispatch': has_dynamic_constructor_dispatch(js_code),
        'recursive_generator_or_selfcall': has_recursive_generator_or_try(js_code),
        'enum_then_property_mutation': has_property_enumeration_and_mutation(js_code)
    }


def extract_optimized_function_retains_gc_sensitive_reference(js_code: str):
    """
    Detects a general pattern of GC-sensitive object retention in optimized code,
    which can lead to use-after-free or type confusion bugs.
    """

    # 1. Detect any optimized function
    optimized_funcs = set(re.findall(r'%Optimize(?:Function|Maglev)OnNextCall\s*\(\s*(\w+)\s*\)', js_code))
    if not optimized_funcs:
        return {'optimized_function_retaining_GC_sensitive_objects':False}

    # 2. Strip % intrinsics for clean parsing
    clean_code = re.sub(r'%[A-Za-z_]\w*\([^)]*\);?', '', js_code)

    # 3. Look for multiple calls to the same function
    func_call_counts = {fn: len(re.findall(rf'\b{re.escape(fn)}\s*\(', clean_code)) for fn in optimized_funcs}
    multiple_invocations = any(count >= 3 for count in func_call_counts.values())

    # 4. Function must capture or use a local object
    alloc_pattern = re.compile(
        rf'function\s+(\w+)\s*\([^)]*\)\s*{{[^{{}}]*?(\b(?:let|var|const)\s+\w+\s*=\s*(?:\{{|\[|new\s+(?:Object|Array)|Object\.create))',
        re.DOTALL
    )
    has_gc_sensitive_alloc = any(fn in m[0] for fn in optimized_funcs for m in alloc_pattern.findall(js_code))

    has_loop = bool(re.search(r'for\s*\(.*?\)\s*{', clean_code))
    has_try = bool(re.search(r'try\s*{', clean_code))
    has_recursion = bool(re.search(r'function\s+(\w+)\s*\([^)]*\)\s*{[^}]*?\b\1\s*\(', clean_code, re.DOTALL))

    stress_pattern = has_loop or has_try or has_recursion
    gc_sensitive = multiple_invocations and has_gc_sensitive_alloc and stress_pattern
    result = {'optimized_function_retaining_GC_sensitive_objects' : gc_sensitive}
    return result


def extract_side_effecting_getter_triggered_by_builtin(js_code: str) -> dict:
    """
    Detects dangerous patterns where a custom getter defined with
    Object.defineProperty causes side effects that may interfere with built-in
    container operations (e.g., isDisjointFrom, includes, filter, reduce).
    """

    feature = {
        'side_effecting_getter_triggered_by_builtin': False,
        'getter_defines_mutation': False,
        'builtin_operation_on_container': False
    }

    # Detect custom getter via Object.defineProperty with side effects
    getter_blocks = re.findall(
        r'defineProperty\s*\([^,]+,\s*["\']\w+["\']\s*,\s*\{[^}]*get\s*:\s*function\s*\([^)]*\)\s*\{([^}]+)\}',
        js_code, re.DOTALL
    )

    # Step 1: Does the getter mutate another object?
    for body in getter_blocks:
        if re.search(r'\b\w+\s*\.\s*(clear|delete|splice|shift|unshift|pop|push|set)\s*\(', body):
            feature['getter_defines_mutation'] = True
            break

    # Step 2: Look for common builtin container methods that could trigger the getter
    builtin_patterns = [
        r'\.\s*isDisjointFrom\s*\(',
        r'\.\s*includes\s*\(',
        r'\.\s*reduce\s*\(',
        r'\.\s*filter\s*\(',
        r'\.\s*map\s*\(',
        r'\.\s*some\s*\(',
        r'\.\s*every\s*\(',
        r'\.\s*find\s*\(',
        r'\.\s*findIndex\s*\(',
        r'\.\s*forEach\s*\(',
        r'\bReflect\.construct\s*\('
    ]

    feature['builtin_operation_on_container'] = any(re.search(pat, js_code) for pat in builtin_patterns)

    # If both conditions are met: it's the dangerous pattern
    if feature['getter_defines_mutation'] and feature['builtin_operation_on_container']:
        feature['side_effecting_getter_triggered_by_builtin'] = True

    return feature

def extract_recursive_eval_gc_crash_features(js_code: str) -> dict:
    """
    Extracts features that signal crash-prone JavaScript behavior under JIT/GC stress,
    especially involving recursion, eval, and runtime state mutation.
    """

    features = {}

    # Feature 1: eval or dynamic Function
    features['uses_eval_or_dynamic_code'] = bool(re.search(r'\beval\s*\(|Function\s*\(', js_code))

    # Feature 2: Direct recursion (function calling itself)
    features['recursive_function_self_call'] = bool(re.search(
        r'function\s+(\w+)\s*\([^)]*\)\s*{[^}]*?\b\1\s*\(', js_code, re.DOTALL))

    # Feature 3: Variable or member usage that may be undefined
    features['undefined_variable_usage'] = bool(re.search(
        r'\bv\d+\s*=[^;]*\bundefined\b|\bv\d+\s*\.\w+', js_code))

    # Feature 4: Multiple try/catch blocks used
    features['exception_suppressed_code_depth'] = len(re.findall(r'try\s*{', js_code))

    # Feature 5: eval inside loop or recursive pattern
    features['calls_eval_inside_loop_or_recursion'] = bool(re.search(
        r'(for|while|function\s+\w+)[^}]*eval\s*\(', js_code, re.DOTALL))

    # Feature 6: presence of stress flags in comments or command line hints
    features['flags_indicate_jit_gc_stress'] = '--stress' in js_code or '--gc' in js_code or '--maglev' in js_code

    # Feature 7: eval with runtime expressions
    features['eval_depends_on_runtime_expression'] = bool(re.search(
        r'eval\s*\([^)]*(Math|Date|performance)', js_code))

    # Final heuristic: high crash likelihood
    features['crash_likelihood_score'] = (
        features['uses_eval_or_dynamic_code'] and
        features['recursive_function_self_call'] and
        features['undefined_variable_usage'] and
        features['exception_suppressed_code_depth'] >= 2 and
        features['calls_eval_inside_loop_or_recursion']
    )

    return features
def extract_runtime_explosion_features(js_code: str) -> dict:
    """
    Extracts general features of GC/JIT-stress-induced crash-prone JavaScript.
    """

    # Normalize
    js_code = re.sub(r'//.*', '', js_code)

    # Check for GC/JIT-related stress flags
    gc_flags = [
        '--jit-fuzzing', '--stress-gc', '--stress-gc-during-compilation',
        '--lazy-new-space-shrinking', '--maglev', '--optimize-for-size'
    ]
    uses_gc_stress_flags = any(flag in js_code for flag in gc_flags)

    # Unbounded control flow: while(true), for(;;), infinite recursion
    unbounded_loop = bool(re.search(r'while\s*\(\s*true\s*\)|for\s*\(\s*;;\s*\)', js_code))
    recursion = bool(re.search(r'function\s+(\w+)\s*\([^)]*\)\s*{[^}]*\b\1\s*\(', js_code, re.DOTALL))
    unbounded_control_flow = unbounded_loop or recursion

    # Dangerous side-effects in try blocks
    try_blocks = re.findall(r'try\s*{([^}]*)}', js_code, re.DOTALL)
    side_effect_keywords = ['WeakRef', 'eval', 'defineProperty', 'prototype', 'Reflect', 'Object.assign']
    side_effects_protected = any(
        any(kw in block for kw in side_effect_keywords) for block in try_blocks
    )

    # Modifying built-in behavior (like constructor.prototype = ...)
    mutates_core_runtime_structures = bool(
        re.search(r'\bconstructor\.prototype\s*=\s*[^;]+', js_code)
    )

    # Usage of undefined vars, eval, or dynamic calls
    uses_dynamic_or_undefined = (
        'eval' in js_code or
        'undefined' in js_code or
        bool(re.search(r'\bnew\s+\w+\s*\(', js_code))  # e.g., new random()
    )

    # State mutation under GC pressure (flags + mutation in loop or try)
    mutating_ops = ['Object.assign', 'WeakRef', 'defineProperty', 'prototype', '[']
    stress_context = any(flag in js_code for flag in gc_flags)
    mutates_state_under_gc_stress = stress_context and any(
        any(kw in block for kw in mutating_ops)
        for block in try_blocks + re.findall(r'for\s*\([^)]*\)\s*{([^}]*)}', js_code, re.DOTALL)
    )

    return {
        'unbounded_control_flow': unbounded_control_flow,
        'side_effects_protected_by_try': side_effects_protected,
        'mutates_core_runtime_structures': mutates_core_runtime_structures,
        'uses_dynamic_or_undefined_behavior': uses_dynamic_or_undefined,
        'uses_gc_or_jit_stress_flags': uses_gc_stress_flags,
        'mutates_state_under_gc_stress': mutates_state_under_gc_stress
    }

with open("pocs/poc.js", "r", encoding="utf-8") as f:
    js_code = f.read()

print(extract_all_features_generic(js_code))
print(extract_additional_lifecycle_features(js_code))
print(extract_jit_confusion_features(js_code))
print(extract_wasm_features(js_code))
print(extract_scalar_jit_features(js_code))
print(extract_js_wasm_promising_features(js_code))
print(extract_regexp_proxy_features(js_code))
print(extract_wasm_type_confusion_features(js_code))
print(extract_wasm_signature_confusion_general(js_code))
print(extract_js_wasm_wrap_general(js_code))
print(extract_wasm_crash_indicators(js_code))
print(extract_reflect_proxy_recursion_patterns(js_code))
print(extract_optimized_function_retains_gc_sensitive_reference(js_code))
print(extract_side_effecting_getter_triggered_by_builtin(js_code))
print(extract_recursive_eval_gc_crash_features(js_code))
print(extract_runtime_explosion_features(js_code))