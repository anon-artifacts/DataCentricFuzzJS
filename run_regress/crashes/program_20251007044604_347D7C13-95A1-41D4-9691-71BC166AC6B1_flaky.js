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

new Int8Array(4014);
new Int8Array(13);
Probe.probe("v9", 7);
Probe.probe("v10", Uint8ClampedArray);
new Uint8ClampedArray(7);
Probe.probe("v12", "Tests for the descriptors of the properties implicitly defined by ES6 class syntax");
Probe.probe("v13", console);
console.log("Tests for the descriptors of the properties implicitly defined by ES6 class syntax");
function descriptor(a16, a17) {
    Probe.probe("v16", a16);
    Probe.probe("v17", a17);
    const v19 = Object.getOwnPropertyDescriptor(a16, a17);
    Probe.probe("v19", v19);
    return v19;
}
function enumeratedProperties(a21) {
    var properties = [];
    Probe.probe("v23", properties);
}
try {
    class C24 {
    }
    Probe.probe("v28", descriptor(C24, "prototype"));
} catch(e27) {
}
try {
    class C28 {
    }
    C28.prototype;
    C28.prototype;
} catch(e32) {
}
try {
    class C33 {
    }
    descriptor(C33, "prototype").enumerable;
} catch(e37) {
}
try {
    class C38 {
    }
    enumeratedProperties(C38).includes("foo");
} catch(e43) {
}
try {
    class C44 {
    }
    Probe.probe("v50", enumeratedProperties(C44));
} catch(e46) {
}
try {
    class C47 {
    }
    descriptor(C47, "prototype").configurable;
} catch(e51) {
}
try {
    class C52 {
    }
    Object.defineProperty(C52, "prototype", { value: "foo" });
} catch(e58) {
}
try {
    class C59 {
        static foo() {
        }
    }
    descriptor(C59, "foo").writable;
} catch(e64) {
}
try {
    class C65 {
        static foo() {
        }
    }
} catch(e68) {
}
try {
    class C69 {
        static foo() {
        }
    }
    const v72 = descriptor(C69, "foo");
    Probe.probe("v79", v72);
    v72.enumerable;
} catch(e74) {
}
try {
    class C75 {
        static foo() {
        }
    }
    enumeratedProperties(C75).includes("foo");
} catch(e80) {
}
try {
    class C81 {
        static foo() {
        }
    }
    descriptor(C81, "foo").configurable;
} catch(e86) {
}
try {
    class C87 {
        static foo() {
        }
    }
    Object.defineProperty(C87, "foo", { value: "bar" });
} catch(e94) {
}
try {
    class C95 {
        static get foo() {
        }
    }
    descriptor(C95, "foo");
} catch(e99) {
}
try {
    class C100 {
        static get foo() {
        }
    }
    Probe.probe("v112", 3);
    C100.foo;
} catch(e105) {
}
try {
    class C106 {
        static get foo() {
        }
    }
    descriptor(C106, "foo");
} catch(e110) {
}
try {
    class C111 {
        static get foo() {
        }
    }
    Probe.probe("v121", C111);
    enumeratedProperties(C111);
} catch(e114) {
}
try {
    class C115 {
        static get foo() {
        }
    }
    Probe.probe("v129", "foo");
    const v118 = new C115();
    enumeratedProperties(v118).includes("foo");
} catch(e121) {
}
try {
    class C122 {
        static get foo() {
        }
    }
    Probe.probe("v137", descriptor(C122, "foo"));
} catch(e126) {
}
try {
    class C127 {
        static get foo() {
        }
    }
    Probe.probe("v143", "bar");
    Object.defineProperty(C127, "foo", {});
    C127.foo;
} catch(e135) {
}
try {
    class C136 {
        foo() {
        }
    }
    Probe.probe("v153", descriptor(C136.prototype, "foo"));
} catch(e141) {
}
try {
    class C142 {
        foo() {
        }
    }
    Probe.probe("v156", C142);
    const t538 = C142.prototype;
    t538.foo = 3;
} catch(e146) {
}
try {
    class C147 {
        foo() {
        }
    }
    const v149 = C147.prototype;
    Probe.probe("v165", v149);
    Probe.probe("v167", descriptor(v149, "foo"));
} catch(e152) {
}
try {
    class C153 {
        foo() {
        }
    }
    Probe.probe("v174", enumeratedProperties(C153.prototype));
} catch(e158) {
}
try {
    class C159 {
        foo() {
        }
    }
    const v162 = new C159();
    enumeratedProperties(v162);
} catch(e164) {
}
try {
    class C165 {
        foo() {
        }
    }
    descriptor(C165.prototype, "foo");
} catch(e170) {
}
try {
    class C171 {
        foo() {
        }
    }
    C171.prototype;
    Probe.probe("v195", "bar");
    const v176 = {};
    C171.prototype.foo;
} catch(e180) {
}
try {
    class C181 {
        get foo() {
        }
    }
    descriptor(C181.prototype, "foo");
} catch(e186) {
}
try {
    class C187 {
        get foo() {
        }
    }
    Probe.probe("v209", C187);
    Probe.probe("v213", C187.prototype);
    Probe.probe("v214", C187.prototype);
} catch(e192) {
}
try {
    class C193 {
        get foo() {
        }
    }
    Probe.probe("v217", C193);
    descriptor(C193.prototype, "foo").enumerable;
} catch(e199) {
}
try {
    class C200 {
        get foo() {
        }
    }
    C200.prototype;
} catch(e203) {
}
try {
    class C204 {
        get foo() {
        }
    }
    const v207 = new C204();
    Probe.probe("v234", v207);
} catch(e208) {
}
try {
    class C209 {
        get foo() {
        }
    }
    Probe.probe("v242", descriptor(C209.prototype, "foo"));
} catch(e214) {
}
try {
    class C215 {
        get foo() {
        }
    }
    const v217 = C215.prototype;
    Probe.probe("v247", v217);
    Object.defineProperty(v217, "foo", { value: "bar" });
} catch(e223) {
}
try {
    class C224 {
    }
    descriptor(C224.prototype, "constructor").writable;
} catch(e229) {
}
try {
    class C230 {
    }
    C230.prototype.constructor;
} catch(e233) {
}
try {
    class C234 {
    }
    const v235 = {};
    function f237() {
    }
    C234.prototype;
    new C234();
} catch(e241) {
}
try {
    class C242 {
    }
    const v243 = C242.prototype;
    Probe.probe("v279", "constructor");
    descriptor(v243, "constructor").enumerable;
} catch(e247) {
}
try {
    class C248 {
    }
    enumeratedProperties(C248.prototype).includes("constructor");
} catch(e253) {
}
try {
    class C254 {
    }
    const v256 = new C254();
    enumeratedProperties(v256);
} catch(e258) {
}
try {
    class C259 {
    }
    descriptor(C259.prototype, "constructor").configurable;
} catch(e264) {
}
try {
    class C265 {
    }
    Probe.probe("v303", "constructor");
    const v268 = {};
    C265.prototype;
} catch(e270) {
}
var successfullyParsed = true;
Probe.reportResults();

// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// [COV] edge counters initialized. Shared memory: shm_id_1162266_18 with 1587369 edges
// V8 is running with experimental features enabled. Stability and security will suffer.
// 
// 
// #
// # Fatal error in ../../src/maglev/maglev-assembler-inl.h, line 777
// # Debug check failed: !allow_allocate() implies builtin == Builtin::kDoubleToI || !BuiltinCanAllocate(builtin).
// #
// #
// #
// #FailureMessage Object: 0x7fec568be700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5639880fca82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5639880fb2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5639880ef546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5639880eed95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x563989c0813e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x563989fd37a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x563989b653eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x563989b13150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x563989b0ffd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5639898665d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x56398985d7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5639882dbcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x563989860588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x56398810014f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x56398810b925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5639880f8650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fec5f474ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fec5f506850]
// Received signal 6
// STDOUT:
// Warning: unknown flag --experimental-wasm-memory64.
// Try --help for options
// Tests for the descriptors of the properties implicitly defined by ES6 class syntax
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 171ms
