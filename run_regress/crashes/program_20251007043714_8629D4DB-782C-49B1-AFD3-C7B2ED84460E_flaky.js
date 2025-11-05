o = { a: 1, b: 1 };
print(1);
for (let i8 = 0; i8 < 2; i8++) {
    print(2);
    o[("a1").substr(0, 1)];
    o[("b1").substr(0, 1)];
}
print(3);
"a" + "b";
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
// #FailureMessage Object: 0x7f91eeffb700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x563c6d677a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x563c6d6762a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x563c6d66a546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x563c6d669d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x563c6f18313e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x563c6f54e7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x563c6f0e03eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x563c6f08e150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x563c6f08afd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x563c6ede15d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x563c6edd87e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x563c6d856cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x563c6eddb588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x563c6d67b14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x563c6d686925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x563c6d673650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f9203460ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f92034f2850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 176ms
