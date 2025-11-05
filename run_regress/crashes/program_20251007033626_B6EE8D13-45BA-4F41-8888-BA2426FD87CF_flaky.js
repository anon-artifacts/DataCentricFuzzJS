function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 5;
}
new F0();
new F0();
new BigInt64Array(6);
new Uint16Array(3505);
new BigInt64Array(127);
var propName = "d";
var propValue = "dvalue";
function CreateSimpleTypeHandlerObject() {
    var obj = Object.create(null);
    obj[propName] = propValue;
    return obj;
}
function CreateSimpleDictionaryTypeHandlerObject() {
    var obj = {};
    obj[propName] = propValue;
    return obj;
}
function CreateDictionaryTypeHandlerObject() {
    var obj = {};
    function f29() {
    }
    Object.defineProperty(obj, propName, { get: f29, configurable: true, enumerable: true });
    delete obj[propName];
    obj[propName] = propValue;
    return obj;
}
function TestNonWritable(a37) {
    var beforeTestValue = null;
    var value = 1;
    value = TestEnumerations(a37, beforeTestValue, value);
    SetWritable(a37, propName, false);
    value = TestEnumerations(a37, beforeTestValue, value);
    SetWritable(a37, propName, true);
    value = TestEnumerations(a37, beforeTestValue, value);
    print("Changing writability during enumeration...");
    function f54(a55, a56, a57) {
        SetWritable(a55, propName, false);
        return a57;
    }
    beforeTestValue = f54;
    value = TestEnumerations(a37, beforeTestValue, value);
    function f61(a62, a63, a64) {
        SetWritable(a62, propName, true);
        return a64;
    }
    beforeTestValue = f61;
    value = TestEnumerations(a37, beforeTestValue, value);
    print("Freezing object");
    Object.freeze(a37);
    beforeTestValue = null;
    value = TestEnumerations(a37, beforeTestValue, value);
}
var o = { a: "aValue" };
function f78() {
    return "GETTER FOR b";
}
function f80(a81) {
    print("SETTER FOR b");
}
DefineAccessor(o, "b", f78, f80);
o.c = "cValue";
o.d = "dValue";
Object.defineProperty(o, "e", { value: "eValue", configurable: true, writable: true, enumerable: false });
function f98() {
    return "GETTER FOR f";
}
function f100(a101) {
    print("SETTER FOR f");
}
DefineAccessor(o, "f", f98, f100);
o.g = "gValue";
delete o.c;
var value = 1;
var beforeTestValue = null;
value = TestEnumerations(o, beforeTestValue, value);
DefineAccessor(o, propName);
value = TestEnumerations(o, beforeTestValue, value);
DefineDataProperty(o, propName, value++);
value = TestEnumerations(o, beforeTestValue, value);
print("Defining accessor property during enumeration...");
function f123(a124, a125, a126) {
    if (a125 === propName) {
        DefineAccessor(a124, propName);
    }
    return a126;
}
beforeTestValue = f123;
value = TestEnumerations(o, beforeTestValue, value);
print("Defining data property during enumeration...");
function f132(a133, a134, a135) {
    if (a134 === propName) {
        DefineDataProperty(a133, propName, a135);
    }
    return a135 + 1;
}
beforeTestValue = f132;
value = TestEnumerations(o, beforeTestValue, value);
function SetWritable(a142, a143, a144) {
    print((("Setting writability of " + a143) + " to ") + a144);
    Object.defineProperty(a142, a143, { writable: a144 });
}
function DefineDataProperty(a156, a157, a158) {
    print((("Defining data property " + a157) + " with value ") + a158);
    Object.defineProperty(a156, a157, { value: a158, writable: true, configurable: true, enumerable: true });
}
function TestEnumerations(a173, a174, a175) {
    let v179 = -(-3.699450967546777e+307);
    -3.699450967546777e+307 / v179;
    v179--;
    print("Testing for-in enumeration");
    for (const v185 in a173) {
        if (a174) {
            a175 = a174(a173, v185, a175);
        }
        a175++;
    }
    print("Testing getOwnPropertyNames enumeration");
    var names = Object.getOwnPropertyNames(a173);
    for (let i195 = 0; i195 < names.length; i195++) {
        if (a174) {
            a175 = a174(a173, i195, a175);
        }
        TestValue(a173, names[i195], a175++);
    }
    return a175;
}
function TestValue(a207, a208, a209) {
    print((a208 + ": ") + a207[a208]);
    print("Setting value to " + a209);
    a207[a208] = a209;
    print((a208 + ": ") + a207[a208]);
}
print("Test 1: Non-writable, simple type handler");
CreateSimpleTypeHandlerObject();
print("Test 2: Non-writable, simple dictionary type handler");
TestNonWritable(CreateSimpleDictionaryTypeHandlerObject());
print("Test 3: Non-writable, dictionary type handler");
TestNonWritable(CreateDictionaryTypeHandlerObject());
print("");
print("Test 4: Accessors");
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// [COV] edge counters initialized. Shared memory: shm_id_1162266_4 with 1587369 edges
// V8 is running with experimental features enabled. Stability and security will suffer.
// 
// 
// #
// # Fatal error in ../../src/maglev/maglev-assembler-inl.h, line 777
// # Debug check failed: !allow_allocate() implies builtin == Builtin::kDoubleToI || !BuiltinCanAllocate(builtin).
// #
// #
// #
// #FailureMessage Object: 0x7f19b18b4700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55c0e4fb8a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55c0e4fb72a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55c0e4fab546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55c0e4faad95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55c0e6ac413e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55c0e6e8f7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55c0e6a213eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55c0e69cf150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55c0e69cbfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55c0e67225d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55c0e67197e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55c0e5197cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55c0e671c588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55c0e4fbc14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55c0e4fc7925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55c0e4fb4650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f19bd470ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f19bd502850]
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
// Test 4: Accessors
// Defining accessors for b
// Defining accessors for f
// Testing for-in enumeration
// a: aValue
// Setting value to 1
// a: 1
// b: GETTER FOR b
// Setting value to 2
// SETTER FOR b
// b: GETTER FOR b
// d: dValue
// Setting value to 3
// d: 3
// f: GETTER FOR f
// Setting value to 4
// SETTER FOR f
// f: GETTER FOR f
// g: gValue
// Setting value to 5
// g: 5
// Testing getOwnPropertyNames enumeration
// a: 1
// Setting value to 6
// a: 6
// b: GETTER FOR b
// Setting value to 7
// SETTER FOR b
// b: GETTER FOR b
// d: 3
// Setting value to 8
// d: 8
// e: eValue
// Setting value to 9
// e: 9
// f: GETTER FOR f
// Setting value to 10
// SETTER FOR f
// f: GETTER FOR f
// g: 5
// Setting value to 11
// g: 11
// Defining accessors for d
// Testing for-in enumeration
// a: 6
// Setting value to 12
// a: 12
// b: GETTER FOR b
// Setting value to 13
// SETTER FOR b
// b: GETTER FOR b
// d: GETTER
// Setting value to 14
// SETTER
// d: GETTER
// f: GETTER FOR f
// Setting value to 15
// SETTER FOR f
// f: GETTER FOR f
// g: 11
// Setting value to 16
// g: 16
// Testing getOwnPropertyNames enumeration
// a: 12
// Setting value to 17
// a: 17
// b: GETTER FOR b
// Setting value to 18
// SETTER FOR b
// b: GETTER FOR b
// d: GETTER
// Setting value to 19
// SETTER
// d: GETTER
// e: 9
// Setting value to 20
// e: 20
// f: GETTER FOR f
// Setting value to 21
// SETTER FOR f
// f: GETTER FOR f
// g: 16
// Setting value to 22
// g: 22
// Defining data property d with value 23
// Testing for-in enumeration
// a: 17
// Setting value to 24
// a: 24
// b: GETTER FOR b
// Setting value to 25
// SETTER FOR b
// b: GETTER FOR b
// d: 23
// Setting value to 26
// d: 26
// f: GETTER FOR f
// Setting value to 27
// SETTER FOR f
// f: GETTER FOR f
// g: 22
// Setting value to 28
// g: 28
// Testing getOwnPropertyNames enumeration
// a: 24
// Setting value to 29
// a: 29
// b: GETTER FOR b
// Setting value to 30
// SETTER FOR b
// b: GETTER FOR b
// d: 26
// Setting value to 31
// d: 31
// e: 20
// Setting value to 32
// e: 32
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: ClassInstancePropertyGenerator, ClassInstanceElementGenerator, ClassDefinitionGenerator, CodeGenMutator, NumberComputationGenerator, ObjectConstructorGenerator, TypedArrayGenerator
// EXECUTION TIME: 186ms
