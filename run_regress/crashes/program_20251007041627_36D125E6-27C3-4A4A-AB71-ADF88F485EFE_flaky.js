var sentinel = {};
const v4 = Symbol.species;
function f5(a6) {
    function f7() {
    }
    function f8() {
    }
    a6(f7, f8);
    return sentinel;
}
Object.defineProperty(Promise, v4, { value: f5 });
const v14 = new ArrayBuffer();
var promise = WebAssembly.instantiate(v14);
const v18 = (a19) => {
    print(a19);
};
const v22 = (a23) => {
    print(a23);
};
var monkey = promise.then(v18, v22);
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
// #FailureMessage Object: 0x7fc09d2cc700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55a9c81a0a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55a9c819f2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55a9c8193546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55a9c8192d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55a9c9cac13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55a9ca0777a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55a9c9c093eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55a9c9bb7150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55a9c9bb3fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55a9c990a5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55a9c99017e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55a9c837fcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55a9c9904588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55a9c81a414f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55a9c81af925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55a9c819c650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fc0a7e86ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fc0a7f18850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 121ms
