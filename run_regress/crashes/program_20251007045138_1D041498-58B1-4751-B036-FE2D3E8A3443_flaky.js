console.log("This test checks the boundary cases of substr().");
("bar").substr(0);
("bar").substr(3);
("bar").substr(4);
("bar").substr(-1);
("bar").substr(-3);
("bar").substr(-4);
("bar").substr(0, 0);
("bar").substr(0, 1);
("bar").substr(0, 3);
("bar").substr(0, 4);
("bar").substr(1, 0);
("bar").substr(1, 1);
("bar").substr(1, 2);
("bar").substr(1, 3);
("bar").substr(3, 0);
("bar").substr(3, 1);
("bar").substr(3, 3);
("bar").substr(4, 0);
("bar").substr(4, 1);
("bar").substr(4, 3);
("bar").substr(-1, 0);
("bar").substr(-1, 1);
("bar").substr(-3, 1);
("bar").substr(-3, 3);
("bar").substr(-3, 4);
("bar").substr(-4);
("bar").substr(-4, 0);
("bar").substr(-4, 1);
("bar").substr(-4, 3);
("bar").substr(-4, 4);
("GMAIL_IMP=bf-i%2Fd-0-0%2Ftl-v").substr(10);
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
// #FailureMessage Object: 0x7f9dca7fa700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5649e34e4a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5649e34e32a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5649e34d7546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5649e34d6d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5649e4ff013e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5649e53bb7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5649e4f4d3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5649e4efb150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5649e4ef7fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5649e4c4e5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5649e4c457e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5649e36c3cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5649e4c48588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5649e34e814f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5649e34f3925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5649e34e0650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f9dd80b1ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f9dd8143850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 201ms
