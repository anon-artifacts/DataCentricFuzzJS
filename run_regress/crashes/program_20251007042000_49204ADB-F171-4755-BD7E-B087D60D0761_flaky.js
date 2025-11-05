function f0() {
    const v1 = () => {
        return 1;
    };
    var a = Array(...Array(5)).map(v1);
    [1,1,1,1,1];
}
f0();
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
// #FailureMessage Object: 0x7f000a7fa700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x56086a123a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x56086a1222a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x56086a116546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x56086a115d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x56086bc2f13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x56086bffa7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x56086bb8c3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x56086bb3a150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x56086bb36fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x56086b88d5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x56086b8847e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x56086a302cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x56086b887588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x56086a12714f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x56086a132925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x56086a11f650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f002d87fac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f002d911850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 140ms
