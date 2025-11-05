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

Probe.probe("v3", 5);
Probe.probe("v4", Int8Array);
new Int8Array(5);
Probe.probe("v7", Uint32Array);
new Uint32Array(139);
Probe.probe("v9", 327);
Probe.probe("v10", Int8Array);
new Int8Array(327);
Probe.probe("v12", "d");
var propName = "d";
Probe.probe("v13", propName);
Probe.probe("v14", "dvalue");
Probe.probe("v15", "dvalue");
function f15() {
    Probe.probe("v17", null);
    const v18 = Object.create(null);
    v18[propName] = "dvalue";
    return v18;
}
Probe.probe("v16", f15);
function f19() {
    var obj = {};
    obj[propName] = "dvalue";
    return obj;
}
Probe.probe("v21", f19);
function CreateDictionaryTypeHandlerObject() {
    var obj = {};
    Probe.probe("v26", obj);
    function f25() {
    }
    Probe.probe("v28", true);
    const v28 = { get: f25, configurable: true, enumerable: true };
    Probe.probe("v30", v28);
    Object.defineProperty(obj, propName, v28);
    delete obj[propName];
    obj[propName] = "dvalue";
    return obj;
}
Probe.probe("v24", CreateDictionaryTypeHandlerObject);
function f32(a33) {
    let v34 = null;
    let v35 = 1;
    Probe.probe("v40", TestEnumerations);
    Probe.probe("v41", TestEnumerations);
    v35 = TestEnumerations;
    Probe.probe("v42", false);
    SetWritable(a33, propName, false);
    v35 = v34;
    SetWritable(a33, propName, true);
    v35 = a33;
    Probe.probe("v49", "Changing writability during enumeration...");
    print("Changing writability during enumeration...");
    function f45(a46, a47, a48) {
        Probe.probe("v53", a46);
        Probe.probe("v55", a48);
        Probe.probe("v56", false);
        SetWritable(a46, propName, false);
        return a48;
    }
    v34 = f45;
    v35 = TestEnumerations;
    function f51(a52, a53, a54) {
        Probe.probe("v60", a52);
        Probe.probe("v63", true);
        SetWritable(a52, propName, true);
        return a54;
    }
    Probe.probe("v59", f51);
    v34 = f51;
    v35 = v35;
    print("Freezing object");
    Probe.probe("v68", Object);
    Object.freeze(a33);
    v34 = null;
    const v62 = TestEnumerations(a33, v34, v35);
    Probe.probe("v71", v62);
    v35 = v62;
}
Probe.probe("v34", f32);
var o = { a: "aValue" };
Probe.probe("v75", o);
Probe.probe("v76", "b");
function f67() {
    Probe.probe("v78", "GETTER FOR b");
    return "GETTER FOR b";
}
function f69(a70) {
    Probe.probe("v81", "SETTER FOR b");
    print("SETTER FOR b");
}
Probe.probe("v79", f69);
Probe.probe("v84", DefineAccessor);
DefineAccessor(o, "b", f67, f69);
Probe.probe("v86", "cValue");
o.c = "cValue";
o.d = "dValue";
Probe.probe("v90", true);
Probe.probe("v92", false);
const v83 = { value: "eValue", configurable: true, writable: true, enumerable: false };
Probe.probe("v94", Object);
Object.defineProperty(o, "e", v83);
function f87() {
    Probe.probe("v98", "GETTER FOR f");
    return "GETTER FOR f";
}
function f89(a90) {
    Probe.probe("v102", print);
    print("SETTER FOR f");
}
DefineAccessor(o, "f", f87, f89);
Probe.probe("v105", "gValue");
o.g = "gValue";
delete o.c;
let v97 = 1;
Probe.probe("v108", v97);
let v98 = null;
Probe.probe("v110", v98);
const v100 = TestEnumerations(o, v98, v97);
Probe.probe("v112", v100);
v97 = v100;
DefineAccessor(o, propName);
v97 = o;
const v102 = v97++;
Probe.probe("v116", DefineDataProperty);
DefineDataProperty(o, propName, v102);
Probe.probe("v118", o);
v97 = o;
Probe.probe("v119", "Defining accessor property during enumeration...");
Probe.probe("v120", print);
print("Defining accessor property during enumeration...");
function f108(a109, a110, a111) {
    Probe.probe("v124", a110);
    Probe.probe("v125", a111);
    if (a110 === propName) {
        DefineAccessor(a109, propName);
    }
    return a111;
}
v98 = f108;
v97 = TestEnumerations(o, v98, v97);
Probe.probe("v129", "Defining data property during enumeration...");
print("Defining data property during enumeration...");
function f117(a118, a119, a120) {
    Probe.probe("v134", a120);
    if (a119 === propName) {
        DefineDataProperty(a118, propName, a120);
    }
    Probe.probe("v137", 1);
    const v124 = a120 + 1;
    Probe.probe("v138", v124);
    return v124;
}
v98 = f117;
const v125 = TestEnumerations(o, v98, v97);
Probe.probe("v139", v125);
v97 = v125;
function DefineAccessor(a127, a128, a129, a130) {
    Probe.probe("v156", a128);
    Probe.probe("v157", a129);
    Probe.probe("v159", !a129);
    function f132() {
        return "GETTER";
    }
    Probe.probe("v160", f132);
    a129 = f132;
    if (!a130) {
        function f135(a136) {
            Probe.probe("v165", "SETTER");
            print("SETTER");
        }
        Probe.probe("v163", f135);
        a130 = f135;
    }
    Probe.probe("v168", "Defining accessors for ");
    const v141 = "Defining accessors for " + a128;
    Probe.probe("v169", v141);
    print(v141);
    Probe.probe("v172", true);
    Probe.probe("v173", true);
    Object.defineProperty(a127, a128, { get: a129, set: a130, configurable: true, enumerable: true });
}
function DefineDataProperty(a150, a151, a152) {
    Probe.probe("v180", a152);
    Probe.probe("v181", "Defining data property ");
    const v154 = "Defining data property " + a151;
    Probe.probe("v182", v154);
    const v156 = v154 + " with value ";
    Probe.probe("v184", v156);
    const v157 = v156 + a152;
    Probe.probe("v186", print);
    print(v157);
    Probe.probe("v188", true);
    Probe.probe("v190", true);
    const v163 = { value: a152, writable: true, configurable: true, enumerable: true };
    Probe.probe("v191", v163);
    Object.defineProperty(a150, a151, v163);
}
function TestEnumerations(a167, a168, a169) {
    print("Testing for-in enumeration");
    for (const v173 in a167) {
        if (a168) {
            const v174 = a168(a167, v173, a169);
            Probe.probe("v202", v174);
            a169 = v174;
        }
        TestValue(a167, v173, a169++);
    }
    print("Testing getOwnPropertyNames enumeration");
    Probe.probe("v208", Object);
    const v181 = Object.getOwnPropertyNames(a167);
    Probe.probe("v209", v181);
    var names = v181;
    for (let v184 = 0; v184 < 10; v184++) {
        Probe.probe("v212", v184);
        v184 < names.length;
        if (a168) {
            const v187 = a168(a167, v184, a169);
            Probe.probe("v218", v187);
            a169 = v187;
        }
        const v188 = names[v184];
        Probe.probe("v219", v188);
        const v189 = a169++;
        Probe.probe("v220", v189);
        TestValue(a167, v188, v189);
        Probe.probe("v215", v184);
        v184++;
    }
    return a169;
}
function TestValue(a194, a195, a196) {
    Probe.probe("v225", a195);
    Probe.probe("v226", a196);
    const v198 = a195 + ": ";
    Probe.probe("v228", v198);
    const v200 = v198 + a194[a195];
    Probe.probe("v230", v200);
    Probe.probe("v231", print);
    print(v200);
    print("Setting value to " + a196);
    a194[a195] = a196;
    const v207 = a195 + ": ";
    const v208 = a194[a195];
    Probe.probe("v238", v208);
    const v209 = v207 + v208;
    Probe.probe("v239", v209);
    print(v209);
}
Probe.probe("v241", "Test 1: Non-writable, simple type handler");
Probe.probe("v242", print);
print("Test 1: Non-writable, simple type handler");
f32(f15());
Probe.probe("v246", "");
print("");
print("Test 2: Non-writable, simple dictionary type handler");
Probe.probe("v250", f19());
print("");
Probe.reportResults();

// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// [COV] edge counters initialized. Shared memory: shm_id_1162266_7 with 1587369 edges
// V8 is running with experimental features enabled. Stability and security will suffer.
// 
// 
// #
// # Fatal error in ../../src/maglev/maglev-assembler-inl.h, line 777
// # Debug check failed: !allow_allocate() implies builtin == Builtin::kDoubleToI || !BuiltinCanAllocate(builtin).
// #
// #
// #
// #FailureMessage Object: 0x7f82c3a45700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x559fec716a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x559fec7152a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x559fec709546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x559fec708d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x559fee22213e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x559fee5ed7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x559fee17f3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x559fee12d150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x559fee129fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x559fede805d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x559fede777e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x559fec8f5cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x559fede7a588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x559fec71a14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x559fec725925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x559fec712650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f82d0603ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f82d0695850]
// Received signal 6
// STDOUT:
// Warning: unknown flag --experimental-wasm-memory64.
// Try --help for options
// Test 1: Non-writable, simple type handler
// Testing for-in enumeration
// d: dvalue
// Setting value to 1
// d: 1
// Testing getOwnPropertyNames enumeration
// d: 1
// Setting value to 2
// d: 2
// Setting writability of d to false
// Testing for-in enumeration
// d: 2
// Setting value to 3
// d: 2
// Testing getOwnPropertyNames enumeration
// d: 2
// Setting value to 4
// d: 2
// Setting writability of d to true
// Testing for-in enumeration
// d: 2
// Setting value to 5
// d: 5
// Testing getOwnPropertyNames enumeration
// d: 5
// Setting value to 6
// d: 6
// Changing writability during enumeration...
// Testing for-in enumeration
// Setting writability of d to false
// d: 6
// Setting value to 7
// d: 6
// Testing getOwnPropertyNames enumeration
// Setting writability of d to false
// d: 6
// Setting value to 8
// d: 6
// Testing for-in enumeration
// Setting writability of d to true
// d: 6
// Setting value to 9
// d: 9
// Testing getOwnPropertyNames enumeration
// Setting writability of d to true
// d: 9
// Setting value to 10
// d: 10
// Freezing object
// Testing for-in enumeration
// d: 10
// Setting value to 11
// d: 10
// Testing getOwnPropertyNames enumeration
// d: 10
// Setting value to 12
// d: 10
// 
// Test 2: Non-writable, simple dictionary type handler
// Testing for-in enumeration
// d: dvalue
// Setting value to 1
// d: 1
// Testing getOwnPropertyNames enumeration
// d: 1
// Setting value to 2
// d: 2
// Setting writability of d to false
// Testing for-in enumeration
// d: 2
// Setting value to 3
// d: 2
// Testing getOwnPropertyNames enumeration
// d: 2
// Setting value to 4
// d: 2
// Setting writability of d to true
// Testing for-in enumeration
// d: 2
// Setting value to 5
// d: 5
// Testing getOwnPropertyNames enumeration
// d: 5
// Setting value to 6
// d: 6
// Changing writability during enumeration...
// Testing for-in enumeration
// Setting writability of d to false
// d: 6
// Setting value to 7
// d: 6
// Testing getOwnPropertyNames enumeration
// Setting writability of d to false
// d: 6
// Setting value to 8
// d: 6
// Testing for-in enumeration
// Setting writability of d to true
// d: 6
// Setting value to 9
// d: 9
// Testing getOwnPropertyNames enumeration
// Setting writability of d to true
// d: 9
// Setting value to 10
// d: 10
// Freezing object
// Testing for-in enumeration
// d: 10
// Setting value to 11
// d: 10
// Testing getOwnPropertyNames enumeration
// d: 10
// Setting value to 12
// d: 10
// 
// Test 3: Non-writable, dictionary type handler
// Testing for-in enumeration
// d: dvalue
// Setting value to 1
// d: 1
// Testing getOwnPropertyNames enumeration
// d: 1
// Setting value to 2
// d: 2
// Setting writability of d to false
// Testing for-in enumeration
// d: 2
// Setting value to 3
// d: 2
// Testing getOwnPropertyNames enumeration
// d: 2
// Setting value to 4
// d: 2
// Setting writability of d to true
// Testing for-in enumeration
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 352ms
