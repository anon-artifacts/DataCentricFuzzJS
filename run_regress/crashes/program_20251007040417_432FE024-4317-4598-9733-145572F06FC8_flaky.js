for (let v0 = 0; v0 < 100; v0++) {
    const v2 = {};
    var proxied = {};
    new Proxy(proxied, {});
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
// #FailureMessage Object: 0x7fae3effb700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5566032ada82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5566032ac2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5566032a0546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55660329fd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x556604db913e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5566051847a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x556604d163eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x556604cc4150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x556604cc0fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x556604a175d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x556604a0e7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55660348ccb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x556604a11588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5566032b114f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5566032bc925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5566032a9650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fae4f3d4ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fae4f466850]
// Received signal 6
// STDOUT:
// This tests that inlining preserves basic function.arguments functionality when said functionality is used directly from within an inlined code block.
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: BuiltinObjectInstanceGenerator, SpliceMutator, BigIntGenerator, FloatGenerator, ArrayGenerator
// EXECUTION TIME: 317ms
