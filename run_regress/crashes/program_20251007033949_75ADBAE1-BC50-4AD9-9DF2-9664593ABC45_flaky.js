function assert(a1) {
}
let result;
const v5 = Object.prototype;
const v10 = {
    get() {
        return result;
    },
    set(a9) {
        result = a9;
    },
};
Object.defineProperty(v5, "1", v10);
const t12 = Array.prototype;
t12.length = 5;
const t15 = Array.prototype;
t15[1] = 42;
result === 42;
Array.prototype[1] === 42;
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
// #FailureMessage Object: 0x7fdb49f34700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x563a72e6aa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x563a72e692a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x563a72e5d546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x563a72e5cd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x563a7497613e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x563a74d417a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x563a748d33eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x563a74881150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x563a7487dfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x563a745d45d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x563a745cb7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x563a73049cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x563a745ce588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x563a72e6e14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x563a72e79925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x563a72e66650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fdb52aeaac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fdb52b7c850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 119ms
