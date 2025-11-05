// If a sample with this instrumentation crashes, it may need the `fuzzilli` function to reproduce the crash.
if (typeof fuzzilli === 'undefined') fuzzilli = function() {};

const Probe = (function() {
    //
    // "Import" the common runtime-assisted mutator code. This will make various utility functions available.
    //
        // Note: runtime instrumentation code must generally assume that any operation performed on any object coming from the "outside", may raise an exception, for example due to triggering a Proxy trap.
    // Further, it must also assume that the environment has been modified arbitrarily. For example, the Array.prototype[@@iterator] may have been set to an invalid value, so using `for...of` syntax could trigger an exception.

    // Load all necessary routines and objects into local variables as they may be overwritten by the program.
    // We generally want to avoid triggerring observable side-effects, such as storing or loading
    // properties. For that reason, we prefer to use builtins like Object.defineProperty.

    const ProxyConstructor = Proxy;
    const BigIntConstructor = BigInt;
    const SetConstructor = Set;

    const ObjectPrototype = Object.prototype;

    const getOwnPropertyNames = Object.getOwnPropertyNames;
    const getPrototypeOf = Object.getPrototypeOf;
    const setPrototypeOf = Object.setPrototypeOf;
    const stringify = JSON.stringify;
    const hasOwnProperty = Object.hasOwn;
    const defineProperty = Object.defineProperty;
    const propertyValues = Object.values;
    const parseInteger = parseInt;
    const NumberIsInteger = Number.isInteger;
    const isNaN = Number.isNaN;
    const isFinite = Number.isFinite;
    const truncate = Math.trunc;
    const apply = Reflect.apply;
    const construct = Reflect.construct;
    const ReflectGet = Reflect.get;
    const ReflectSet = Reflect.set;
    const ReflectHas = Reflect.has;

    // Bind methods to local variables. These all expect the 'this' object as first parameter.
    const concat = Function.prototype.call.bind(Array.prototype.concat);
    const findIndex = Function.prototype.call.bind(Array.prototype.findIndex);
    const includes = Function.prototype.call.bind(Array.prototype.includes);
    const shift = Function.prototype.call.bind(Array.prototype.shift);
    const pop = Function.prototype.call.bind(Array.prototype.pop);
    const push = Function.prototype.call.bind(Array.prototype.push);
    const filter = Function.prototype.call.bind(Array.prototype.filter);
    const execRegExp = Function.prototype.call.bind(RegExp.prototype.exec);
    const stringSlice = Function.prototype.call.bind(String.prototype.slice);
    const toUpperCase = Function.prototype.call.bind(String.prototype.toUpperCase);
    const numberToString = Function.prototype.call.bind(Number.prototype.toString);
    const bigintToString = Function.prototype.call.bind(BigInt.prototype.toString);
    const stringStartsWith = Function.prototype.call.bind(String.prototype.startsWith);
    const setAdd = Function.prototype.call.bind(Set.prototype.add);
    const setHas = Function.prototype.call.bind(Set.prototype.has);

    const MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
    const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;

    // Simple, seedable PRNG based on a LCG.
    class RNG {
        m = 2 ** 32;
        a = 1664525;
        c = 1013904223;
        x;

        constructor(seed) {
            this.x = seed;
        }
        randomInt() {
            this.x = (this.x * this.a + this.c) % this.m;
            if (!isInteger(this.x)) throw "RNG state is not an Integer!"
            return this.x;
        }
        randomFloat() {
            return this.randomInt() / this.m;
        }
        probability(p) {
            return this.randomFloat() < p;
        }
        reseed(seed) {
            this.x = seed;
        }
    }

    // When creating empty arrays to which elements are later added, use a custom array type that has a null prototype. This way, the arrays are not
    // affected by changes to the Array.prototype that could interfere with array builtins (e.g. indexed setters or a modified .constructor property).
    function EmptyArray() {
        let array = [];
        setPrototypeOf(array, null);
        return array;
    }

    //
    // Misc. helper functions.
    //
    // Type check helpers. These are less error-prone than manually using typeof and comparing against a string.
    function isObject(v) {
        return typeof v === 'object';
    }
    function isFunction(v) {
        return typeof v === 'function';
    }
    function isString(v) {
        return typeof v === 'string';
    }
    function isNumber(v) {
        return typeof v === 'number';
    }
    function isBigint(v) {
        return typeof v === 'bigint';
    }
    function isSymbol(v) {
        return typeof v === 'symbol';
    }
    function isBoolean(v) {
        return typeof v === 'boolean';
    }
    function isUndefined(v) {
        return typeof v === 'undefined';
    }

    // Helper function to determine if a value is an integer, and within [MIN_SAFE_INTEGER, MAX_SAFE_INTEGER].
    function isInteger(n) {
        return isNumber(n) && NumberIsInteger(n) && n>= MIN_SAFE_INTEGER && n <= MAX_SAFE_INTEGER;
    }

    // Helper function to determine if a string is "simple". We only include simple strings for property/method names or string literals.
    // A simple string is basically a valid, property name with a maximum length.
    const simpleStringRegExp = /^[0-9a-zA-Z_$]+$/;
    function isSimpleString(s) {
        if (!isString(s)) throw "Non-string argument to isSimpleString: " + s;
        return s.length < 50 && execRegExp(simpleStringRegExp, s) !== null;
    }

    // Helper function to determine if a string is numeric and its numeric value representable as an integer.
    function isNumericString(s) {
        if (!isString(s)) return false;
        let number = parseInteger(s);
        return number >= MIN_SAFE_INTEGER && number <= MAX_SAFE_INTEGER && numberToString(number) === s;
    }

    // Helper function to determine whether a property can be accessed without raising an exception.
    function tryAccessProperty(prop, obj) {
        try {
            obj[prop];
            return true;
        } catch (e) {
            return false;
        }
    }

    // Helper function to determine if a property exists on an object or one of its prototypes. If an exception is raised, false is returned.
    function tryHasProperty(prop, obj) {
        try {
            return prop in obj;
        } catch (e) {
            return false;
        }
    }

    // Helper function to load a property from an object. If an exception is raised, undefined is returned.
    function tryGetProperty(prop, obj) {
        try {
            return obj[prop];
        } catch (e) {
            return undefined;
        }
    }

    // Helper function to obtain the own properties of an object. If that raises an exception (e.g. on a Proxy object), an empty array is returned.
    function tryGetOwnPropertyNames(obj) {
        try {
            return getOwnPropertyNames(obj);
        } catch (e) {
            return new Array();
        }
    }

    // Helper function to fetch the prototype of an object. If that raises an exception (e.g. on a Proxy object), null is returned.
    function tryGetPrototypeOf(obj) {
        try {
            return getPrototypeOf(obj);
        } catch (e) {
            return null;
        }
    }

    // Helper function to that creates a wrapper function for the given function which will call it in a try-catch and return false on exception.
    function wrapInTryCatch(f) {
        return function() {
            try {
                return apply(f, this, arguments);
            } catch (e) {
                return false;
            }
        };
    }

    //
    // Basic random number generation utility functions.
    //

    // Initially the rng is seeded randomly, specific mutators can reseed() the rng if they need deterministic behavior.
    // See the explore operation in JsOperations.swift for an example.
    let rng = new RNG(truncate(Math.random() * 2**32));

    function probability(p) {
        if (p < 0 || p > 1) throw "Argument to probability must be a number between zero and one";
        return rng.probability(p);
    }

    function randomIntBetween(start, end) {
        if (!isInteger(start) || !isInteger(end)) throw "Arguments to randomIntBetween must be integers";
        return (rng.randomInt() % (end - start)) + start;
    }

    function randomFloat() {
        return rng.randomFloat();
    }

    function randomBigintBetween(start, end) {
        if (!isBigint(start) || !isBigint(end)) throw "Arguments to randomBigintBetween must be bigints";
        if (!isInteger(Number(start)) || !isInteger(Number(end))) throw "Arguments to randomBigintBetween must be representable as regular intergers";
        return BigIntConstructor(randomIntBetween(Number(start), Number(end)));
    }

    function randomIntBelow(n) {
        if (!isInteger(n)) throw "Argument to randomIntBelow must be an integer";
        return rng.randomInt() % n;
    }

    function randomElement(array) {
        return array[randomIntBelow(array.length)];
    }

    // Action constants.
    const PROPERTY_LOAD = "loads";
    const PROPERTY_STORE = "stores";

    // Property access outcomes.
    const PROPERTY_NOT_FOUND = 0;
    const PROPERTY_FOUND = 1;

    //
    // Result recording and reporting.
    //
    let results = { __proto__: null };

    function reportError(msg) {
        fuzzilli('FUZZILLI_PRINT', 'PROBING_ERROR: ' + msg);
    }

    function reportResults() {
        fuzzilli('FUZZILLI_PRINT', 'PROBING_RESULTS: ' + stringify(results));
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

const v1 = [true,true];
Probe.probe("v1", v1);
const v2 = [true];
Probe.probe("v2", v2);
[v2,v1,true,v2];
Probe.probe("v7", 3);
new BigInt64Array(3);
Probe.probe("v10", 6);
Probe.probe("v11", Uint16Array);
new Uint16Array(6);
Probe.probe("v13", 4096);
Probe.probe("v14", Uint8Array);
new Uint8Array(4096);
function f16(a17, a18) {
    Probe.probe("v19", 0);
    return 0 & a18;
}
Probe.probe("v16", f16);
let v21 = 0;
Probe.probe("v21", v21);
function f22() {
    for (let i24 = 0;
        (() => {
            Probe.probe("v24", i24);
            Probe.probe("v25", 100);
            return i24 < 100;
        })();
        (() => {
            Probe.probe("v27", i24);
            i24++;
        })()) {
        Probe.probe("v29", i24);
        f16(i24, i24);
        function f31() {
            v21++;
            return 0;
        }
        const o34 = {
            "valueOf": f31,
        };
        f16(i24, o34);
    }
}
Probe.probe("v22", f22);
f22();
function f38(a39, a40) {
    Probe.probe("v40", a40);
    ~a40;
}
let v42 = 0;
Probe.probe("v42", v42);
function f43() {
    for (let i45 = 0;
        (() => {
            Probe.probe("v45", i45);
            Probe.probe("v46", 100);
            return i45 < 100;
        })();
        i45++) {
        f38(i45, i45);
        function f52() {
            v42++;
            return 0;
        }
        Probe.probe("v52", f52);
        const o55 = {
            "valueOf": f52,
        };
        f38(i45, o55);
    }
}
f43();
function f59(a60, a61) {
    Probe.probe("v62", 0);
    return 0 >>> a61;
}
let v64 = 0;
function f65() {
    for (let i67 = 0;
        (() => {
            Probe.probe("v68", 100);
            return i67 < 100;
        })();
        (() => {
            Probe.probe("v70", i67);
            i67++;
        })()) {
        Probe.probe("v72", i67);
        f59(i67, i67);
        function f74() {
            v64++;
            Probe.probe("v76", 0);
            return 0;
        }
        const o77 = {
            "valueOf": f74,
        };
        f59(i67, o77);
    }
}
Probe.probe("v65", f65);
f65();
Probe.reportResults();

// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// #
// # Fatal error in ../../src/objects/shared-function-info-inl.h, line 629
// # Debug check failed: HasFeedbackMetadata(kAcquireLoad).
// #
// #
// #
// #FailureMessage Object: 0x7fd21349aec0
// ==== C stack trace ===============================
// 
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x756c13) [0x5555a61eec13]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x75622b) [0x5555a61ee22b]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x74e279) [0x5555a61e6279]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x74de55) [0x5555a61e5e55]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x128b893) [0x5555a6d23893]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1283d0a) [0x5555a6d1bd0a]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x282b2ac) [0x5555a82c32ac]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x282e1e8) [0x5555a82c61e8]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1d2c571) [0x5555a77c4571]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1b4f01c) [0x5555a75e701c]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1b497ff) [0x5555a75e17ff]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1d386ec) [0x5555a77d06ec]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1d3ad09) [0x5555a77d2d09]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1d4dcae) [0x5555a77e5cae]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1d4e514) [0x5555a77e6514]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1d3d677) [0x5555a77d5677]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1d4e776) [0x5555a77e6776]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1d4f1ad) [0x5555a77e71ad]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1b4e3b5) [0x5555a75e63b5]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1b497ff) [0x5555a75e17ff]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1b435be) [0x5555a75db5be]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1b41a3d) [0x5555a75d9a3d]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1b3cfda) [0x5555a75d4fda]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x9cc16f) [0x5555a646416f]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1b3edc3) [0x5555a75d6dc3]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x75896b) [0x5555a61f096b]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x75e48b) [0x5555a61f648b]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x754689) [0x5555a61ec689]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fd228894ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126a40) [0x7fd228926a40]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --jobs=28 --profile=v8 --timeout=800 --storagePath=/home/uuu/fuzz_main --importCorpus=/home/uuu/dev/corpus/out.test --corpusImportMode=full --argumentRandomization /home/uuu/v8_src.main/v8/out/fuzz/d8
// TARGET ARGS: /home/uuu/v8_src.main/v8/out/fuzz/d8 --expose-gc --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --harmony --js-staging --no-harmony-set-methods --no-enable-sharedarraybuffer-per-context --maglev-inline-api-calls --concurrent-maglev-high-priority-threads --no-optimize-on-next-call-optimizes-to-maglev --no-jitless --osr-from-maglev --always-osr-from-maglev --no-stress-lazy-source-positions --concurrent-sparkplug-high-priority-threads --no-sparkplug-needs-short-builtins --no-shared-string-table --no-transition-strings-during-gc-with-stack --no-stress-concurrent-inlining-attach-code --stress-turbo-late-spilling --no-stress-inline --reorder-builtins --turbo-instruction-scheduling --turbo-stress-instruction-scheduling --stress-gc-during-compilation --turboshaft-instruction-selection --no-turboshaft-wasm-instruction-selection-staged --no-turboshaft-verify-reductions --no-optimize-for-size --no-stress-wasm-code-gc --no-lazy-new-space-shrinking --no-separate-gc-phases --no-gc-global --scavenge-separate-stack-scanning --optimize-gc-for-battery --no-verify-heap --no-compact-on-every-full-gc --stress-compaction --no-stress-compaction-random --no-flush-baseline-code --flush-code-based-on-time --stress-flush-code --no-stress-per-context-marking-worklist --no-stress-incremental-marking --no-concurrent-marking-high-priority-threads --no-randomize-all-allocations --manual-evacuation-candidates-selection --no-enable-source-at-csa-bind --no-stress-background-compile --no-embedder-instance-types --no-expose-externalize-string --no-allow-unsafe-function-constructor --no-force-slow-path --no-max-lazy --always-turbofan --no-always-osr --prepare-always-turbofan --no-deopt-to-baseline --parallel-compile-tasks-for-eager-toplevel --no-expose-inspector-scripts --no-mega-dom-ic --no-regexp-interpret-all --no-minor-ms --no-slow-histograms --use-external-strings
// CONTRIBUTORS: 
// EXECUTION TIME: 2076ms
