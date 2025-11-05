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

Probe.probe("v0", 129);
Probe.probe("v1", Uint16Array);
new Uint16Array(129);
Probe.probe("v3", 64);
Probe.probe("v4", Int8Array);
new Int8Array(64);
Probe.probe("v6", 1);
Probe.probe("v7", BigUint64Array);
new BigUint64Array(1);
Probe.probe("v9", 1024);
Probe.probe("v10", Uint16Array);
new Uint16Array(1024);
Probe.probe("v12", 10);
Probe.probe("v13", Int32Array);
new Int32Array(10);
Probe.probe("v15", 255);
new Uint8ClampedArray(255);
const v20 = 2040 - 2;
Probe.probe("v20", v20);
Probe.probe("v21", 10);
const v22 = v20 + 10;
Probe.probe("v22", v22);
Probe.probe("v23", Array);
const v24 = Array(v22);
gc();
gc();
const v28 = gc();
Probe.probe("v28", v28);
const v30 = Object();
Probe.probe("v30", v30);
const v31 = v24.length;
Probe.probe("v31", v31);
v24[v31 - 2] = v30;
v24.shift();
function f35() {
    for (let i37 = 1;
        (() => {
            Probe.probe("v37", i37);
            return i37 < 10;
        })();
        i37++) {
        let v43 = 1;
        Probe.probe("v43", v43);
        for (let i45 = (() => {
                Probe.probe("v44", 1);
                return 1;
            })();
            (() => {
                Probe.probe("v45", i45);
                return i45 < 10;
            })();
            (() => {
                Probe.probe("v48", i45);
                i45++;
            })()) {
            if (v43 == i45) {
                i45 = 0;
            }
            const v54 = i45 % -v43;
            Probe.probe("v54", v54);
            f35 = v54;
            v43++;
            const v57 = new Map();
            function f58(a59) {
                Probe.probe("v59", a59);
                this.n = a59;
            }
            Probe.probe("v58", f58);
            const v62 = new f58(2);
            Probe.probe("v62", v62);
            const v63 = [];
            Probe.probe("v63", v63);
            v57.set(v62, v63);
            Probe.probe("v65", 4);
            const v66 = new f58(4);
            v57.set(v66, []);
            const v70 = new f58(5);
            const v71 = [];
            Probe.probe("v71", v71);
            v57.set(v70, v71);
            v57.set(v28, []);
            const v76 = new f58(8);
            const v78 = new f58(9);
            Probe.probe("v78", v78);
            v57.set(v78, v30);
            v57.delete(v78);
            const v81 = [];
            Probe.probe("v81", v81);
            v57.set(v78, v81);
            v57.delete(v76);
            v57.delete(v78);
        }
    }
}
f35();
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
// #FailureMessage Object: 0x7f6a34fdeec0
// ==== C stack trace ===============================
// 
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x756c13) [0x55defb861c13]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x75622b) [0x55defb86122b]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x74e279) [0x55defb859279]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x74de55) [0x55defb858e55]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x128b893) [0x55defc396893]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1283d0a) [0x55defc38ed0a]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x282b2ac) [0x55defd9362ac]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x282e1e8) [0x55defd9391e8]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1d2c571) [0x55defce37571]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1b4f01c) [0x55defcc5a01c]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1b497ff) [0x55defcc547ff]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1d386ec) [0x55defce436ec]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1d3ad09) [0x55defce45d09]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1d4dcae) [0x55defce58cae]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1d4e514) [0x55defce59514]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1d3d677) [0x55defce48677]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1d4e776) [0x55defce59776]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1d4f1ad) [0x55defce5a1ad]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1b4e3b5) [0x55defcc593b5]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1b497ff) [0x55defcc547ff]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1b435be) [0x55defcc4e5be]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1b41a3d) [0x55defcc4ca3d]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1b3cfda) [0x55defcc47fda]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x9cc16f) [0x55defbad716f]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x1b3edc3) [0x55defcc49dc3]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x75896b) [0x55defb86396b]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x75e48b) [0x55defb86948b]
//     /home/uuu/v8_src.main/v8/out/fuzz/d8(+0x754689) [0x55defb85f689]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f6a4b494ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126a40) [0x7f6a4b526a40]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --jobs=28 --profile=v8 --timeout=800 --storagePath=/home/uuu/fuzz_main --importCorpus=/home/uuu/dev/corpus/out.test --corpusImportMode=full --argumentRandomization /home/uuu/v8_src.main/v8/out/fuzz/d8
// TARGET ARGS: /home/uuu/v8_src.main/v8/out/fuzz/d8 --expose-gc --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --harmony --js-staging --no-harmony-set-methods --no-enable-sharedarraybuffer-per-context --maglev-inline-api-calls --concurrent-maglev-high-priority-threads --no-optimize-on-next-call-optimizes-to-maglev --no-jitless --osr-from-maglev --always-osr-from-maglev --no-stress-lazy-source-positions --concurrent-sparkplug-high-priority-threads --no-sparkplug-needs-short-builtins --no-shared-string-table --no-transition-strings-during-gc-with-stack --no-stress-concurrent-inlining-attach-code --stress-turbo-late-spilling --no-stress-inline --reorder-builtins --turbo-instruction-scheduling --turbo-stress-instruction-scheduling --stress-gc-during-compilation --turboshaft-instruction-selection --no-turboshaft-wasm-instruction-selection-staged --no-turboshaft-verify-reductions --no-optimize-for-size --no-stress-wasm-code-gc --no-lazy-new-space-shrinking --no-separate-gc-phases --no-gc-global --scavenge-separate-stack-scanning --optimize-gc-for-battery --no-verify-heap --no-compact-on-every-full-gc --stress-compaction --no-stress-compaction-random --no-flush-baseline-code --flush-code-based-on-time --stress-flush-code --no-stress-per-context-marking-worklist --no-stress-incremental-marking --no-concurrent-marking-high-priority-threads --no-randomize-all-allocations --manual-evacuation-candidates-selection --no-enable-source-at-csa-bind --no-stress-background-compile --no-embedder-instance-types --no-expose-externalize-string --no-allow-unsafe-function-constructor --no-force-slow-path --no-max-lazy --always-turbofan --no-always-osr --prepare-always-turbofan --no-deopt-to-baseline --parallel-compile-tasks-for-eager-toplevel --no-expose-inspector-scripts --no-mega-dom-ic --no-regexp-interpret-all --no-minor-ms --no-slow-histograms --use-external-strings
// CONTRIBUTORS: 
// EXECUTION TIME: 3103ms
