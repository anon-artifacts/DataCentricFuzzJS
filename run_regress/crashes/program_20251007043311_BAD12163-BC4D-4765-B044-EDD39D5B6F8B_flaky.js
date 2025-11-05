new Int8Array();
const v3 = {};
([]).push();
new Uint32Array();
function f10(a11) {
    TestEnumerations(a11, null);
    SetWritable();
    TestEnumerations(a11);
    TestEnumerations(a11);
}
function SetWritable(a21, a22, a23) {
    const v24 = {};
}
function TestEnumerations(a26, a27, a28) {
    for (const v29 in a26) {
    }
    for (let v30 = 0; v30 < 5; v30++) {
        if (a27) {
        }
        a26[v30];
    }
}
let v33 = undefined;
f10(v33 = Object);
const v35 = {};
let v36 = undefined;
const v37 = {};
Object.defineProperty(v37, "d", { configurable: true });
delete v37["d"];
f10(v36 = v37);
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// #
// # Fatal error in ../../src/maglev/maglev-assembler-inl.h, line 777
// # Debug check failed: !allow_allocate() implies builtin == Builtin::kDoubleToI || !BuiltinCanAllocate(builtin).
// #
// #
// #
// #FailureMessage Object: 0x7f46696ec700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55cbaf552a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55cbaf5512a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55cbaf545546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55cbaf544d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55cbb105e13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55cbb14297a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55cbb0fbb3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55cbb0f69150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55cbb0f65fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55cbb0cbc5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55cbb0cb37e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55cbaf731cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55cbb0cb6588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55cbaf55614f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55cbaf561925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55cbaf54e650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f46722a2ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f4672334850]
// Received signal 6
// STDOUT:
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
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: TypedArrayGenerator, FloatGenerator, CombineMutator
// EXECUTION TIME: 296ms
