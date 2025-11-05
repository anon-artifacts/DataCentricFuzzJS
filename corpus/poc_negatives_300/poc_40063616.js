const Probe = (function() {
    // Note: this code must generally assume that any operation performed on the object to explore, or any object obtained through it (e.g. a prototype), may raise an exception, for example due to triggering a Proxy trap.
    // Further, it must also assume that the environment has been modified arbitrarily. For example, the Array.prototype[@@iterator] may have been set to an invalid value, so using `for...of` syntax could trigger an exception.
    // Load all necessary routines into local variables as they may be overwritten by the program.
    const ProxyConstructor = Proxy;
    const ReflectGet = Reflect.get;
    const ReflectSet = Reflect.set;
    const ReflectHas = Reflect.has;
    const hasOwnProperty = Object.hasOwn;
    const getPrototypeOf = Object.getPrototypeOf;
    const setPrototypeOf = Object.setPrototypeOf;
    const stringify = JSON.stringify;
    const parseInteger = parseInt;
    const match = Function.prototype.call.bind(RegExp.prototype[Symbol.match]);
    const numberToString = Function.prototype.call.bind(Number.prototype.toString);
    const stringStartsWith = Function.prototype.call.bind(String.prototype.startsWith);
    const MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
    const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
    // Action constants.
    const PROPERTY_LOAD = "loads";
    const PROPERTY_STORE = "stores";
    // Property access outcomes.
    const PROPERTY_NOT_FOUND = 0;
    const PROPERTY_FOUND = 1;
    //
    // Misc. helper routines.
    //
    // Helper function to determine if a string is "simple". We only include simple strings for property/method names or string literals.
    // A simple string is basically a valid, property name with a maximum length.
    function isSimpleString(s) {
        if (typeof s !== 'string') return false;
        return s.length < 50 && match(/^[0-9a-zA-Z_$]+$/, s);
    }
    // Helper function to determine if a string is numeric and its numeric value representable as an integer.
    function isNumericString(s) {
        if (typeof s !== 'string') return false;
        let number = parseInteger(s);
        return number >= MIN_SAFE_INTEGER && number <= MAX_SAFE_INTEGER && numberToString(number) === s;
    }
    function isSymbol(s) {
        return typeof s === 'symbol';
    }
    //
    // Result recording and reporting.
    //
    let results = { __proto__: null };
    function reportError(msg) {
        //fuzzilli('FUZZILLI_PRINT', 'PROBING_ERROR: ' + msg);
    }
    function reportResults() {
       // fuzzilli('FUZZILLI_PRINT', 'PROBING_RESULTS: ' + stringify(results));
    }
    // Record a property action performed on a probe.
    // |target| is expected to be the original prototype of the probe object. It is used to determine whether the accessed property exists anywhere in the prototype chain of the probe.
    function recordAction(action, id, target, key) {
        let outcome = PROPERTY_NOT_FOUND;
        if (ReflectHas(target, key)) {
            outcome = PROPERTY_FOUND;
        }
        let keyString = key;
        if (typeof keyString !== 'string') {
            try {
                keyString = key.toString();
                if (typeof keyString !== 'string') throw 'not a string';
            } catch(e) {
                // Got some "weird" property key. Ignore it.
                return;
            }
        }
        if (!isSimpleString(keyString) && !isNumericString(keyString) && !isSymbol(key)) {
            // Cannot deal with this property name. Ignore it.
            return;
        }
        if (isSymbol(key) && !stringStartsWith(keyString, 'Symbol(Symbol.')) {
            // We can only deal with well-known symbols (e.g. "Symbol(Symbol.toPrimitive)"), and this isn't one. Ignore it.
            return;
        }
        if (!hasOwnProperty(results, id)) {
            results[id] = { [PROPERTY_LOAD]: { __proto__: null }, [PROPERTY_STORE]: { __proto__: null } };
        }
        // If the same action is performed on the same probe multiple times, we keep the last result.
        results[id][action][keyString] = outcome;
    }
    function recordActionWithErrorHandling(action, id, target, key) {
        try {
            recordAction(action, id, target, key);
        } catch(e) {
            reportError(e);
        }
    }
    //
    // Probe implementation.
    //
    function probe(id, value) {
        let originalPrototype, newPrototype;
        let handler = {
            get(target, key, receiver) {
                // Special logic to deal with programs that fetch the prototype of an object after it was turned into a probe.
                // In that case, the probe Proxy would leak to the script, potentially causing incorrect behaviour. To deal with that,
                // we (1) return the original prototype when __proto__ is loaded (but this can be "bypassed" through Object.getPrototypeOf)
                // and (2) attempt to detect property accesses on the prototype itself (instead of on the probe) and handle those separately.
                if (key === '__proto__' && receiver === value) return originalPrototype;
                if (receiver === newPrototype) return ReflectGet(target, key);
                recordActionWithErrorHandling(PROPERTY_LOAD, id, target, key);
                return ReflectGet(target, key, receiver);
            },
            set(target, key, value, receiver) {
                if (receiver === newPrototype) return ReflectSet(target, key, value);
                recordActionWithErrorHandling(PROPERTY_STORE, id, target, key);
                return ReflectSet(target, key, value, receiver);
            },
            has(target, key) {
                // Treat this as a load.
                recordActionWithErrorHandling(PROPERTY_LOAD, id, target, key);
                return ReflectHas(target, key);
            },
        };
        try {
            // This can fail, e.g. due to "Cannot convert undefined or null to object" or if the object is non-extensible. In that case, do nothing.
            originalPrototype = getPrototypeOf(value);
            newPrototype = new ProxyConstructor(originalPrototype, handler);
            setPrototypeOf(value, newPrototype);
        } catch (e) {}
    }
    function probeWithErrorHandling(id, value) {
        try {
            probe(id, value);
        } catch(e) {
            reportError(e);
        }
    }
    return {
        probe: probeWithErrorHandling,
        reportResults: reportResults
    };
})();
function main() {
function V0(v2,v3,v4,v5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v6 = 0; v6 < 4004; v6++) {
        Probe.probe("v6", v6);
        const v8 = new BigUint64Array(v6);
    }
}
//Probe.probe("v0", V0);
//Probe.probe("v9", "function");
function v10(v11,v12) {
    for (let v13 = 0; v13 < 1150; v13++) {
        const v16 = new Int32Array(14990892);
    }
    return v11;
}
const v17 = "function" || "function";
//Probe.probe("v17", v17);
const v18 = ["function","function","function","function"];
//Probe.probe("v18", v18);
v18.type = v17;
//Probe.probe("v19", Worker);
const v20 = new Worker(v10,v18);
const v21 = new V0(v18,v10,v17,"function");
}
main(); 
//Probe.reportResults();
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// V8 is running with experimental features enabled. Stability and security will suffer.
// #
// # Fatal error in ../../src/heap/gc-tracer.cc, line 568
// # Debug check failed: IsSweepingInProgress().
// #
// #
// #
// #FailureMessage Object: 0x7fff6b7f5a70
// ==== C stack trace ===============================
//     /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0x79fef2) [0x560805dd6ef2]
//     /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0x79ea77) [0x560805dd5a77]
//     /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0x790d0a) [0x560805dc7d0a]
//     /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0x790665) [0x560805dc7665]
//     /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0xf6a7c6) [0x5608065a17c6]
//     /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0xf6a28a) [0x5608065a128a]
//     /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0xf8b1d2) [0x5608065c21d2]
//     /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0xf9bdfa) [0x5608065d2dfa]
//     /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0x1040c91) [0x560806677c91]
//     /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0x10377a3) [0x56080666e7a3]
//     /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0x1036ee2) [0x56080666dee2]
//     /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0xf8d1e6) [0x5608065c41e6]
//     /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0xf88f7a) [0x5608065bff7a]
//     /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0xf85a44) [0x5608065bca44]
//     /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0xf84893) [0x5608065bb893]
//     /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0xe6e93b) [0x5608064a593b]
//     /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0x1ed6f2c) [0x56080750df2c]
//     /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0x1ed67ee) [0x56080750d7ee]
//     /home/uuu/v8_src.main/v8/out/fuzzbuild/d8(+0x366cf36) [0x560808ca3f36]
// Received signal 6
// STDOUT:
// [COV] edge counters initialized. Shared memory: shm_id_1305764_0 with 1187130 edges
// ARGS: /home/uuu/v8_src.main/v8/out/fuzzbuild/d8 --expose-gc --future --harmony --assert-types --maglev-assert --harmony-rab-gsab --harmony-struct --allow-natives-syntax --interrupt-budget=1000 --fuzzing --sparkplug --no-opt --lazy --allow-natives-syntax --no-always-osr --no-always-turbofan --no-force-slow-path --turbo-move-optimization --turbo-jt --no-turbo-loop-peeling --turbo-loop-variable --turbo-loop-rotation --turbo-cf-optimization --turbo-escape --turbo-allocation-folding --turbo-instruction-scheduling --turbo-stress-instruction-scheduling --no-turbo-store-elimination --turbo-rewrite-far-jumps --turbo-optimize-apply --no-enable-ssse3 --turbo-load-elimination --turbo-inlining --turbo-splitting --lazy-feedback-allocation --turbo-filter=match --allow-natives-syntax --shared-string-table
