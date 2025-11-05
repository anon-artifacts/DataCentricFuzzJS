function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
let v6 = 3505;
new Uint16Array();
new BigInt64Array();
v6--;
F0 * v6;
const v19 = { a: "aValue" };
DefineAccessor(v19, "b");
function f26() {
    return "GETTER FOR f";
}
function f28(a29) {
}
v19.g = "gValue";
delete v19.c;
let v32 = 1;
v32 = TestEnumerations(v19, null, v32);
v32 = null;
function f37(a38, a39, a40) {
    return a40;
}
const v41 = TestEnumerations(v19, f37);
print();
function f43(a44, a45, a46) {
    return a46;
}
v32 = TestEnumerations(v19, f43, v41);
function DefineAccessor(a49, a50, a51, a52) {
    !a51;
    function f54() {
    }
    function f56(a57) {
    }
    "Defining accessors for " + a50;
    const v63 = { set: f56, configurable: true };
}
function DefineDataProperty(a66, a67, a68) {
    const v73 = { value: a68, enumerable: true };
}
function TestEnumerations(a76, a77, a78) {
    print();
    for (const v81 in a76) {
        TestValue(a76, v81);
    }
    print();
    Object.getOwnPropertyNames(a76);
    for (let v87 = 0; v87 < 50; v87++) {
        if (a77) {
        }
        v87++;
    }
    return a78;
}
function TestValue(a91, a92, a93) {
    a92 + ": ";
    a92 + ": ";
    print();
}
print();
print("Test 2: Non-writable, simple dictionary type handler");
const v107 = {};
v107["d"] = "dvalue";
let v108 = null;
let v109 = 1;
function f115(a116, a117, a118) {
}
v108 = f115;
v109 = v108;
function f119(a120, a121, a122) {
    SetWritable(a120, "d", true);
}
v108 = f119;
v109 = v108;
print("Freezing object");
Object.freeze();
v108 = null;
TestEnumerations(v107, null, v108);
const v132 = {};
function f133() {
}
Object.defineProperty(v132, "d", { enumerable: true });
v132["d"] = "dvalue";
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
// #FailureMessage Object: 0x7f6c3a65a700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5639693f0a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5639693ef2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5639693e3546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5639693e2d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x56396aefc13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x56396b2c77a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x56396ae593eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x56396ae07150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x56396ae03fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x56396ab5a5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x56396ab517e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5639695cfcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x56396ab54588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5639693f414f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5639693ff925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5639693ec650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f6c47218ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f6c472aa850]
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
// d: 8
// Setting value to 14
// d: 14
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
// d: 14
// Setting value to 19
// d: 19
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
// f: GETTER FOR f
// Setting value to 33
// SETTER FOR f
// f: GETTER FOR f
// g: 28
// Setting value to 34
// g: 34
// Defining accessor property during enumeration...
// Testing for-in enumeration
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: ApiMethodCallGenerator, NamedVariableGenerator, ReassignmentGenerator, ObjectConstructorGenerator, CodeGenMutator, TypedArrayGenerator, NumberComputationGenerator
// EXECUTION TIME: 164ms
