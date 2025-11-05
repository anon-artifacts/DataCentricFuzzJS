var toStrings;
var valueOfs;
var toStringCalled;
var valueOfCalled;
const v8 = {};
function f9() {
    toStringCalled = true;
    return {};
}
function f12() {
    toStringCalled = true;
    return undefined;
}
function f15() {
    toStringCalled = true;
    return "hi";
}
toStrings = [v8,f9,f12,f15];
const v19 = {};
function f20() {
    valueOfCalled = true;
    return {};
}
function f23() {
    valueOfCalled = true;
    return undefined;
}
function f26() {
    valueOfCalled = true;
    return "hi";
}
function f29() {
    valueOfCalled = true;
    return "1/1/1970 1:00 am";
}
function f32() {
    valueOfCalled = true;
    return "84";
}
function f35() {
    valueOfCalled = true;
    return 37;
}
valueOfs = [v19,f20,f23,f26,f29,f32,f35];
for (const v39 in toStrings) {
    for (const v40 in valueOfs) {
        toStringCalled = false;
        valueOfCalled = false;
        const v43 = toStrings[v39];
        const v44 = valueOfs[v40];
        var obj = { toString: v43, valueOf: v44 };
        print("=== Implicit toString ===");
        try {
            print("" + obj);
        } catch(e53) {
            print("Got error:");
            print("    name:     " + e53.name);
            print("    message:  " + e53.message);
        }
        print("toString called:  " + (toStringCalled ? "yes" : "no"));
        print("valueOf called:   " + (valueOfCalled ? "yes" : "no"));
        print("=== Implicit valueOf ===");
        try {
            print(1 * obj);
        } catch(e81) {
            print("Got error:");
            print("    name:     " + e81.name);
            print("    message:  " + e81.message);
        }
        print("toString called:  " + (toStringCalled ? "yes" : "no"));
        print("valueOf called:   " + (valueOfCalled ? "yes" : "no"));
    }
}
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// [COV] edge counters initialized. Shared memory: shm_id_1162266_20 with 1587369 edges
// V8 is running with experimental features enabled. Stability and security will suffer.
// 
// 
// #
// # Fatal error in ../../src/maglev/maglev-assembler-inl.h, line 777
// # Debug check failed: !allow_allocate() implies builtin == Builtin::kDoubleToI || !BuiltinCanAllocate(builtin).
// #
// #
// #
// #FailureMessage Object: 0x7fc1b30cf700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x557b367a2a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x557b367a12a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x557b36795546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x557b36794d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x557b382ae13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x557b386797a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x557b3820b3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x557b381b9150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x557b381b5fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x557b37f0c5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x557b37f037e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x557b36981cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x557b37f06588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x557b367a614f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x557b367b1925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x557b3679e650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fc1bc486ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fc1bc518850]
// Received signal 6
// STDOUT:
// Warning: unknown flag --experimental-wasm-memory64.
// Try --help for options
// === Implicit toString ===
// Got error:
//     name:     TypeError
//     message:  Cannot convert object to primitive value
// toString called:  no
// valueOf called:   no
// === Implicit valueOf ===
// Got error:
//     name:     TypeError
//     message:  Cannot convert object to primitive value
// toString called:  no
// valueOf called:   no
// === Implicit toString ===
// Got error:
//     name:     TypeError
//     message:  Cannot convert object to primitive value
// toString called:  no
// valueOf called:   yes
// === Implicit valueOf ===
// Got error:
//     name:     TypeError
//     message:  Cannot convert object to primitive value
// toString called:  no
// valueOf called:   yes
// === Implicit toString ===
// undefined
// toString called:  no
// valueOf called:   yes
// === Implicit valueOf ===
// NaN
// toString called:  no
// valueOf called:   yes
// === Implicit toString ===
// hi
// toString called:  no
// valueOf called:   yes
// === Implicit valueOf ===
// NaN
// toString called:  no
// valueOf called:   yes
// === Implicit toString ===
// 1/1/1970 1:00 am
// toString called:  no
// valueOf called:   yes
// === Implicit valueOf ===
// NaN
// toString called:  no
// valueOf called:   yes
// === Implicit toString ===
// 84
// toString called:  no
// valueOf called:   yes
// === Implicit valueOf ===
// 84
// toString called:  no
// valueOf called:   yes
// === Implicit toString ===
// 37
// toString called:  no
// valueOf called:   yes
// === Implicit valueOf ===
// 37
// toString called:  no
// valueOf called:   yes
// === Implicit toString ===
// Got error:
//     name:     TypeError
//     message:  Cannot convert object to primitive value
// toString called:  yes
// valueOf called:   no
// === Implicit valueOf ===
// Got error:
//     name:     TypeError
//     message:  Cannot convert object to primitive value
// toString called:  yes
// valueOf called:   no
// === Implicit toString ===
// Got error:
//     name:     TypeError
//     message:  Cannot convert object to primitive value
// toString called:  yes
// valueOf called:   yes
// === Implicit valueOf ===
// Got error:
//     name:     TypeError
//     message:  Cannot convert object to primitive value
// toString called:  yes
// valueOf called:   yes
// === Implicit toString ===
// undefined
// toString called:  no
// valueOf called:   yes
// === Implicit valueOf ===
// NaN
// toString called:  no
// valueOf called:   yes
// === Implicit toString ===
// hi
// toString called:  no
// valueOf called:   yes
// === Implicit valueOf ===
// NaN
// toString called:  no
// valueOf called:   yes
// === Implicit toString ===
// 1/1/1970 1:00 am
// toString called:  no
// valueOf called:   yes
// === Implicit valueOf ===
// NaN
// toString called:  no
// valueOf called:   yes
// === Implicit toString ===
// 84
// toString called:  no
// valueOf called:   yes
// === Implicit valueOf ===
// 84
// toString called:  no
// valueOf called:   yes
// === Implicit toString ===
// 37
// toString called:  no
// valueOf called:   yes
// === Implicit valueOf ===
// 37
// toString called:  no
// valueOf called:   yes
// === Implicit toString ===
// undefined
// toString called:  yes
// valueOf called:   no
// === Implicit valueOf ===
// NaN
// toString called:  yes
// valueOf called:   no
// === Implicit toString ===
// undefined
// toString called:  yes
// valueOf called:   yes
// === Implicit valueOf ===
// NaN
// toString called:  yes
// valueOf called:   yes
// === Implicit toString ===
// undefined
// toString called:  no
// valueOf called:   yes
// === Implicit valueOf ===
// NaN
// toString called:  no
// valueOf called:   yes
// === Implicit toString ===
// hi
// toString called:  no
// valueOf called:   yes
// === Implicit valueOf ===
// NaN
// toString called:  no
// valueOf called:   yes
// === Implicit toString ===
// 1/1/1970 1:00 am
// toString called:  no
// valueOf called:   yes
// === Implicit valueOf ===
// NaN
// toString called:  no
// valueOf called:   yes
// === Implicit toString ===
// 84
// toString called:  no
// valueOf called:   yes
// === Implicit valueOf ===
// 84
// toString called:  no
// valueOf called:   yes
// === Implicit toString ===
// 37
// toString called:  no
// valueOf called:   yes
// === Implicit valueOf ===
// 37
// toString called:  no
// valueOf called:   yes
// === Implicit toString ===
// hi
// toString called:  yes
// valueOf called:   no
// === Implicit valueOf ===
// NaN
// toString called:  yes
// valueOf called:   no
// === Implicit toString ===
// hi
// toString called:  yes
// valueOf called:   yes
// === Implicit valueOf ===
// NaN
// toString called:  yes
// valueOf called:   yes
// === Implicit toString ===
// undefined
// toString called:  no
// valueOf called:   yes
// === Implicit valueOf ===
// NaN
// toString called:  no
// valueOf called:   yes
// === Implicit toString ===
// hi
// toString called:  no
// valueOf called:   yes
// === Implicit valueOf ===
// NaN
// toString called:  no
// valueOf called:   yes
// === Implicit toString ===
// 1/1/1970 1:00 am
// toString called:  no
// valueOf called:   yes
// === Implicit valueOf ===
// NaN
// toString called:  no
// valueOf called:   yes
// === Implicit toString ===
// 84
// toString called:  no
// valueOf called:   yes
// === Implicit valueOf ===
// 84
// toString called:  no
// valueOf called:   yes
// === Implicit toString ===
// 37
// toString called:  no
// valueOf called:   yes
// === Implicit valueOf ===
// 37
// toString called:  no
// valueOf called:   yes
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 154ms
