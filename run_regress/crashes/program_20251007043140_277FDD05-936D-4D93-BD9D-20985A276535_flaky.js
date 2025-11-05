var log = "";
for (const v6 of ["a","b","c"]) {
    log += v6;
    if (v6 === "b") {
        break;
    }
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
// #FailureMessage Object: 0x7fb90e1e1700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55e388321a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55e3883202a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55e388314546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55e388313d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55e389e2d13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55e38a1f87a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55e389d8a3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55e389d38150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55e389d34fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55e389a8b5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55e389a827e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55e388500cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55e389a85588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55e38832514f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55e388330925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55e38831d650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fb91cda3ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fb91ce35850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 152ms
