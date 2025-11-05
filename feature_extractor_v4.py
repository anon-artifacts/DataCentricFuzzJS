import random
import re
import json
import subprocess
import os
import csv
from typing import Dict, List, Union


def hot_loop_count(js_code):
    return len(re.findall(r'for\s*\([^)]*\b(10000|\d{5,})\b', js_code)) + \
           len(re.findall(r'while\s*\([^)]*\b(10000|\d{5,})\b', js_code))

def nested_loop_or_recursion(js_code):
    nested_loops = len(re.findall(r'(for|while)\s*\([^)]*\)\s*{[^{}]*(for|while)', js_code))
    recursion = len(re.findall(r'function\s+(\w+)\s*\([^)]*\)\s*{[^}]*\b\1\s*\(', js_code))
    return nested_loops + recursion

def function_hotness(js_code):
        # Identify function definitions
        functions = re.findall(r'function\s+(\w+)\s*\(', js_code)
        hot_calls = 0
        for fn in functions:
            # Check if the function is called inside a loop
            pattern = rf'(for|while)\s*\([^)]*\)\s*{{[^{{}}]*{fn}\([^)]*\)[^{{}}]*}}'
            if re.search(pattern, js_code, re.DOTALL):
                hot_calls += 1
        return hot_calls

def object_shape_mutation(js_code):
    # Look for mutations after usage
    object_defs = re.findall(r'var\s+(\w+)\s*=\s*\{[^}]*\}', js_code)
    shape_mutations = 0
    for obj in object_defs:
        used = re.search(rf'{obj}\.\w+', js_code)
        mutated = re.search(rf'({obj}\.\w+\s*=|delete\s+{obj}\.\w+|Object\.defineProperty\s*\(\s*{obj}|{obj}\.__proto__|Object\.setPrototypeOf\s*\(\s*{obj})', js_code)
        if used and mutated:
            shape_mutations += 1
    return shape_mutations


def type_diversion_var(js_code):
    assignments = re.findall(r'(\w+)\s*=\s*([^;]+);', js_code)
    var_types = {}
    for var, val in assignments:
        val = val.strip()
        typ = infer_type(val)
        if var not in var_types:
            var_types[var] = set()
        var_types[var].add(typ)
    return sum(len(types) > 1 for types in var_types.values())

def type_diversion_func_args(js_code):
    calls = re.findall(r'(\w+)\(([^)]*)\)', js_code)
    func_args = {}
    for fn, args in calls:
        args = args.split(',')
        arg_types = tuple(infer_type(arg.strip()) for arg in args if arg.strip())
        if fn not in func_args:
            func_args[fn] = set()
        func_args[fn].add(arg_types)
    return sum(len(variants) > 1 for variants in func_args.values())

def array_bounds_manipulation(js_code):
        # Look for length manipulations and complex indexing
        length_set = re.findall(r'\w+\.length\s*=', js_code)
        inside_loop = re.findall(r'(for|while)\s*\([^)]*\)\s*{[^}]*\.(push|pop|shift)\(\)[^}]*}', js_code, re.DOTALL)
        variable_indices = re.findall(r'\[\s*\w+\s*\]', js_code)
        large_or_negative_indices = re.findall(r'\[\s*-?\d{{5,}}\s*\]', js_code)
        return len(length_set) + len(inside_loop) + len(variable_indices) + len(large_or_negative_indices)


def typedarray_dv_usage(js_code):
    return int(bool(re.search(r'(Int|Uint|Float|Big|Data)Array|DataView', js_code)))

def gc_stress_pattern(js_code):
    allocations = len(re.findall(r'\[\s*\]|\{\s*\}|new\s+\w+', js_code))
    explicit_gc = '%CollectGarbage' in js_code
    return int(allocations > 10 or explicit_gc)

def exception_handling(js_code):
    return int('try' in js_code and 'catch' in js_code)

def use_of_proxy_reflect(js_code):
    return int(bool(re.search(r'new\s+Proxy|Reflect\.', js_code)))

def use_of_eval_function(js_code):
    return int(bool(re.search(r'eval\s*\(|new\s+Function\s*\(', js_code)))

def api_sort_regex_builtin(js_code):
    sort_custom = bool(re.search(r'\.sort\s*\(\s*function', js_code))
    heavy_regex = bool(re.search(r'/.*[+*]{3,}.*?/', js_code))
    return int(sort_custom or heavy_regex)

def control_flow_graph_complexity(js_code):
        # Approximate basic blocks and nesting using brace tracking
        lines = js_code.splitlines()
        max_depth, depth = 0, 0
        basic_blocks = 0
        for line in lines:
            depth += line.count('{') - line.count('}')
            max_depth = max(max_depth, depth)
            if re.search(r'(if|else|switch|for|while|do|case)\b', line.strip()):
                basic_blocks += 1
        return {
            'cfg_block_count': basic_blocks,
            'max_nesting_depth': max_depth
        }


def infer_type(val):
    val = val.strip()
    if re.match(r'^["\'].*["\']$', val):
        return 'string'
    elif re.match(r'^\d+(\.\d+)?$', val):
        return 'number'
    elif val in ('true', 'false'):
        return 'boolean'
    elif re.match(r'^\[.*\]$', val):
        return 'array'
    elif re.match(r'^\{.*\}$', val):
        return 'object'
    else:
        return 'unknown'

def extract_all_generic(js_code):
    cfg = control_flow_graph_complexity(js_code)
    return {
        "hot_loop_count": hot_loop_count(js_code),
        "nested_loop_or_recursion": nested_loop_or_recursion(js_code),
        "function_hotness": function_hotness(js_code),
        "type_diversion_var": type_diversion_var(js_code),
        "type_diversion_func_args": type_diversion_func_args(js_code),
        "object_shape_mutation": object_shape_mutation(js_code),
        "array_bounds_manipulation": array_bounds_manipulation(js_code),
        "typedarray_dv_usage": typedarray_dv_usage(js_code),
        "gc_stress_pattern": gc_stress_pattern(js_code),
        "exception_handling": exception_handling(js_code),
        "use_of_proxy_reflect": use_of_proxy_reflect(js_code),
        "use_of_eval_function": use_of_eval_function(js_code),
        "api_sort_regex_builtin": api_sort_regex_builtin(js_code),
        "control_flow_graph_blocks": cfg["cfg_block_count"],
        "control_flow_max_nesting": cfg["max_nesting_depth"]
    }


def extract_bigint_runtime_reflection_features(js_code: str) -> dict:
    return {
        'uses_bigint_in_reflection': bool(re.search(r'Object\.getOwnPropertyNames\s*\(\s*\w+\s*\)', js_code)) and
                                     bool(re.search(r'\b\d+n\b', js_code)),
        'iife_based_control_flow': js_code.count('(() =>') >= 2,
        'invalid_api_operand_type': 'Object.getOwnPropertyNames' in js_code and 'BigInt' in js_code
    }

def extract_iife_crash_indicators(js_code: str) -> dict:
    iife_depth = js_code.count('(() =>') + js_code.count('(function()')
    reflection_bigint = 'Object.getOwnPropertyNames' in js_code and 'BigInt' in js_code

    return {
        'recursive_iife_depth': iife_depth,
        'uses_reflection_with_bigint': reflection_bigint,
        'crash_prone_due_to_iife_and_bigint': iife_depth >= 2 and reflection_bigint
    }
       
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
        #removed gc timing pattern as it causes problem in parsing
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
        #'gc_timing_pattern': extract_gc_features(js_code)[1],
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
    jit_intrinsics = [
        '%OptimizeFunctionOnNextCall',
        '%PrepareFunctionForOptimization',
        '%OptimizeMaglevOnNextCall',
        '%DeoptimizeFunction',
        '%NeverOptimizeFunction',
        '%EnsureFeedbackVectorForFunction',
        '%SetAllocationProfileTrackingEnabled',
        '%CollectGarbage',
        '%EnableCodeLoggingForTesting',
        '%DisableOptimizationFinalization',
        '%DebugPrint',
        '%SystemBreak',
        '%DisallowCodegenFromStrings',
        '%GetOptimizationStatus',
        '%GetFunctionCode',
        '%CreateObjectWithoutProperties',
        '%WasmTierUpFunction',
        '%CompileBaseline',
        '%CompileOptimized',
        '%IsAsmWasmCode'
    ]

    features['uses_jit_optimization_intrinsics'] = any(
        instr in js_code for instr in jit_intrinsics
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
        re.search(r'WebAssembly\.promising\([^)]+\)\s*;.*?\w+\s*\(\)', js_code, re.DOTALL) or 
        re.search(r'\.exports\s*\.\s*\w+\s*\(', js_code) or
        re.search(r'\.exports\s*\[\s*["\']\w+["\']\s*\]\s*\(', js_code)
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
    
    def has_mutual_iife_or_nested_behavior(code):
        return code.count('(() =>') >= 2 or 'prototype.hasOwnProperty' in code
    
    return {
        'dynamic_constructor_dispatch': has_dynamic_constructor_dispatch(js_code),
        'recursive_generator_or_selfcall': has_recursive_generator_or_try(js_code) or has_mutual_iife_or_nested_behavior(js_code),
        'enum_then_property_mutation': has_property_enumeration_and_mutation(js_code)
    }


def extract_optimized_function_retains_gc_sensitive_reference(js_code: str):
    """
    Detects a general pattern of GC-sensitive object retention in optimized code,
    which can lead to use-after-free or type confusion bugs.
    """

    # 1. Detect any optimized function
    optimized_funcs = set(re.findall(r'%Optimize(?:Function|Maglev)OnNextCall\s*\(\s*(\w+)\s*\)', js_code))
    # --- PATCH: Heuristic fallback for compiler-level crashes without explicit %Optimize ---
    if not optimized_funcs:
        uses_reflection = 'Object.getOwnPropertyNames' in js_code
        deep_iife = js_code.count('(() =>') >= 2
        implicit_opt = '"use asm"' in js_code and 'WebAssembly.Module' in js_code
        if uses_reflection and deep_iife and implicit_opt:
            return {'optimized_function_retaining_GC_sensitive_objects': True}
        else:
            return {'optimized_function_retaining_GC_sensitive_objects': False}

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
    #features['crash_likelihood_score'] = (
    #    features['uses_eval_or_dynamic_code'] and
    #    features['recursive_function_self_call'] and
    #    features['undefined_variable_usage'] and
    #    features['exception_suppressed_code_depth'] >= 2 and
    #    features['calls_eval_inside_loop_or_recursion']
    #)

    return features
def detect_unbounded_worker_eval(js_code: str) -> bool:
    # Step 1: Find the function name passed to new Worker(...)
    worker_match = re.search(r'new\s+Worker\s*\(\s*(\w+)\s*,', js_code)
    if not worker_match:
        return False

    worker_func = worker_match.group(1)

    # Step 2: Find the function definition of that function
    func_body_match = re.search(
        rf'function\s+{re.escape(worker_func)}\s*\([^)]*\)\s*{{(.*?)}}',
        js_code, re.DOTALL
    )
    if not func_body_match:
        return False

    func_body = func_body_match.group(1)

    # Step 3: Check if eval appears within the function body
    return 'eval' in func_body

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
    unbounded_iife_loop = bool(re.search(
        # NOTE: This regex uses a non-greedy match for the function body (.*?).
        # While much more robust than the original, it's not a full parser and can
        # be confused by pathologically nested code. It is a strong heuristic.
        r'for\s*\('           # Match 'for('
        r'[^;]*;'             # Match the initializer part (can be empty) and the first semicolon.
        r'\s*'                # Whitespace
        r'\(\s*'              # The opening parenthesis of the IIFE wrapper: (...)()
        r'(?:'                # Start of a non-capturing group for the function type
        r'function\b'         # Matches the keyword 'function'
        r'|'                  # OR
        r'\([^)]*\)\s*=>'     # Matches an arrow function like '() =>' or '(a,b) =>'
        r')'                  # End of the function type group
        r'.*?'                # Non-greedily match the function body and arguments.
        r'\)\s*\(\s*\)'        # The closing and invocation parens: )()
        r'\s*;'               # The second semicolon, ending the condition part.
        r'[^)]*'              # The final incrementer part of the loop.
        r'\)',                # The closing parenthesis of the for loop.
    js_code, re.DOTALL
    ))
    # Extra: detect worker running unbounded function (optional heuristic)
    unbounded_worker = detect_unbounded_worker_eval(js_code)
        
    unbounded_control_flow = unbounded_loop or recursion or unbounded_iife_loop or unbounded_worker

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
        bool(re.search(r'\bnew\s+\w+\s*\(', js_code)) or  # e.g., new random()
        ('Object.getOwnPropertyNames' in js_code and bool(re.search(r'\b\d+n\b', js_code))) or
        'prototype' in js_code  # dynamic reflection
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
def extract_v8_simple_features(js_code: str) -> dict:
    """
    Extract predictive crash features from a JavaScript PoC code snippet.
    Returns a dictionary of boolean feature values.
    """
    features = {
        "has_wasm": bool(re.search(r'(WebAssembly|wasm|kWasm)', js_code, re.IGNORECASE)),
        "uses_jit_intrinsics": bool(re.search(r'%\w+\(', js_code)),
        "triggers_gc": bool(re.search(r'\bgc\s*\(', js_code)),
        "manipulates_array": bool(re.search(r'new\s+Array\s*\(|\.length\s*=', js_code)),
        "uses_try_catch": bool(re.search(r'try\s*{', js_code)),
        "uses_worker_or_async": bool(re.search(r'new\s+Worker\s*\(|setTimeout\s*\(|setInterval\s*\(', js_code)),
        "uses_reflection": bool(re.search(r'(Reflect|Proxy|eval)\s*\(', js_code)),
        "uses_typed_array": bool(re.search(r'(Uint|Float|Int)\d{1,2}Array', js_code)),
        "allocates_large_array": bool(re.search(r'new\s+Array\s*\(\s*\d{5,}\s*\)', js_code)),
        "has_recursive_call": bool(re.search(
            r'function\s+(\w+)\s*\([^)]*\)\s*{[^{}]*\b\1\s*\(', js_code, re.DOTALL))
    }
    return features



def extract_all_features(js_code: str) -> dict:
    """
    Runs all individual feature extractors and consolidates them into a single dictionary.
    """
    # This ensures we have a comprehensive feature set for each file.
    # Note: Some features might be duplicated if defined in multiple functions;
    # the last one called will overwrite previous ones.
    all_features = {}
    
    # Consolidate features from all extractors
    all_features.update(extract_bigint_runtime_reflection_features(js_code))
    all_features.update(extract_iife_crash_indicators(js_code))
    all_features.update(extract_additional_lifecycle_features(js_code))
    all_features.update(extract_jit_confusion_features(js_code))
    all_features.update(extract_wasm_features(js_code))
    all_features.update(extract_scalar_jit_features(js_code))
    all_features.update(extract_js_wasm_promising_features(js_code))
    all_features.update(extract_regexp_proxy_features(js_code))
    all_features.update(extract_wasm_type_confusion_features(js_code))
    all_features.update(extract_wasm_signature_confusion_general(js_code))
    all_features.update(extract_js_wasm_wrap_general(js_code))
    all_features.update(extract_wasm_crash_indicators(js_code))
    all_features.update(extract_reflect_proxy_recursion_patterns(js_code))
    all_features.update(extract_optimized_function_retains_gc_sensitive_reference(js_code))
    all_features.update(extract_side_effecting_getter_triggered_by_builtin(js_code))
    all_features.update(extract_recursive_eval_gc_crash_features(js_code))
    all_features.update(extract_runtime_explosion_features(js_code))
    all_features.update(extract_v8_simple_features(js_code))
    all_features.update(extract_all_generic(js_code))
    # The 'extract_all_features_generic' function has many core features.
    # We call it to ensure its features are included and potentially updated.
    all_features.update(extract_all_features_generic(js_code))

    return all_features

def process_poc_folder(pocs_folder_path: str, output_csv_path: str, crash: int = 0):
    """
    Processes all JS files in a folder, extracts features, and saves them to a CSV file.
    
    Args:
        pocs_folder_path (str): The path to the folder containing JavaScript PoC files.
        output_csv_path (str): The path where the output CSV file will be saved.
    """
    # 1. Find all JavaScript files in the folder
    all_js_files = [f for f in os.listdir(pocs_folder_path) if f.endswith('.js') and 'bug' not in f.lower() and 'regress' not in f.lower()]
    #if len(all_js_files) > 500:
    #    print(f"Found {len(all_js_files)} files. Randomly selecting 500 to process.")
    #    js_files = random.sample(all_js_files, 500)
    #else:
    #    print(f"Found {len(all_js_files)} files. Processing all of them.")
    js_files = all_js_files
        
    if not js_files:
        print(f"No JavaScript files found in '{pocs_folder_path}'.")
        return

    print(f"Found {len(js_files)} JavaScript files to process.")

    # 2. Process the first file to determine all possible feature names (columns)
    first_file_path = os.path.join(pocs_folder_path, js_files[0])
    with open(first_file_path, 'r', encoding='utf-8', errors='ignore') as f:
        js_code = f.read()
    
    # Get the feature names from the first PoC to use as CSV headers
    feature_names = list(extract_all_features(js_code).keys())
    # Add 'filename' as the first column
    feature_names.insert(0, 'filename')
    feature_names.append('target')  # Add 'crash' column for crash status
    # 3. Process all files and write to CSV
    with open(output_csv_path, 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=feature_names)
        
        # Write the header row
        writer.writeheader()

        # Iterate over all JS files
        for filename in js_files:
            file_path = os.path.join(pocs_folder_path, filename)
            try:
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                    js_code = f.read()
                
                # Get all features for the current file
                features = extract_all_features(js_code)
                # Add the filename to the dictionary
                features['filename'] = filename
                features['target'] = crash
                # Write the features as a row in the CSV
                writer.writerow(features)

            except Exception as e:
                print(f"Could not process file {filename}: {e}")
    
    print(f"\n✅ Successfully processed all files.")
    print(f"Output saved to: {output_csv_path}")

def process_poc(poc_path: str, return_format: str = "dict") -> Union[Dict[str, object], str]:
    """
    Process a single JavaScript PoC file and return extracted features.

    Parameters
    ----------
    poc_path : str
        Path to a JavaScript PoC file.
    return_format : {"dict", "string"}
        - "dict": returns raw feature dictionary.
        - "string": returns comma-separated key=value pairs.

    Returns
    -------
    Union[Dict[str, object], str]
        Feature dictionary or comma-separated key=value string.
    """
    if not os.path.isfile(poc_path):
        raise FileNotFoundError(f"File does not exist: {poc_path}")

    with open(poc_path, 'r', encoding='utf-8', errors='ignore') as f:
        js_code = f.read()

    features = extract_all_features(js_code)
    if return_format == "string":
        return ",".join(f"{k}={v}" for k, v in features.items())
    return features

if __name__ == "__main__":
    # --- Configuration ---
    # Set the folder containing your PoC .js files
    POC_FOLDER = "folds/fold_3/tmp/mjsunit"  # Or "negatives", "pocs", etc.
    # Set the desired name for your output CSV file
    OUTPUT_CSV = "folds/fold_3/tmp/features_positives_mjsunit.csv"

    # --- Run the processor ---
    process_poc_folder(POC_FOLDER, OUTPUT_CSV, crash=0)  # Set crash=1 for crash PoCs
    #feat_dict = process_poc("pocs/poc_40067586.js",return_format = "string")
    #print(feat_dict)