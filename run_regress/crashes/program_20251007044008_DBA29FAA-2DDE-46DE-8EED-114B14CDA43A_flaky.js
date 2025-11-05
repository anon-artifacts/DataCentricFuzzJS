("xyz").replace(RegExp("()()()()()()()()()()(z)?(y)"), Function.apply());
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
// #FailureMessage Object: 0x7f6b74de7700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x556010cbca82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x556010cbb2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x556010caf546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x556010caed95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5560127c813e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x556012b937a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5560127253eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5560126d3150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5560126cffd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5560124265d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55601241d7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x556010e9bcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x556012420588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x556010cc014f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x556010ccb925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x556010cb8650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f6b7f9a1ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f6b7fa33850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 134ms
