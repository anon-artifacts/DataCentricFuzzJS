function f0() {
    'use asm';
    function brbool(a2, a3, a4) {
        a2 = a2 | 0;
        a3 = a3 | 0;
        a4 = a4 | 0;
        var d = 0;
        var e = 0;
        if ((d & (e = ((d = (a2 | 0) == (a3 | 0)) | 0) == (a4 | 0))) | 0) {
            return 1;
        }
        return 2;
    }
    return brbool;
}
let test = f0();
if ((test(1, 1, 1) == 1) && (test(1, 2, 3) == 2)) {
    print("PASS");
} else {
    print("FAIL");
}
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
// #FailureMessage Object: 0x7f8f038c6700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55a9aff70a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55a9aff6f2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55a9aff63546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55a9aff62d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55a9b1a7c13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55a9b1e477a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55a9b19d93eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55a9b1987150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55a9b1983fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55a9b16da5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55a9b16d17e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55a9b014fcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55a9b16d4588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55a9aff7414f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55a9aff7f925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55a9aff6c650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f8f0ec81ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f8f0ed13850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 262ms
