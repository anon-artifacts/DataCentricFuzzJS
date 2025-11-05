function write(a1) {
    print(a1 + "");
}
var d;
d = Date.UTC("1974");
write(d);
d = Date.UTC(1974);
write(d);
d = Date.UTC(1974, 9);
write(d);
d = Date.UTC(1974, 9, 24);
write(d);
d = Date.UTC(1974, 9, 24, 0);
write(d);
d = Date.UTC(1974, 9, 24, 0, 20);
write(d);
d = Date.UTC(1974, 9, 24, 0, 20, 30);
write(d);
d = Date.UTC(1974, 9, 24, 0, 20, 30, 40);
write(d);
d = Date.UTC(1974, 9, 24, 0, 20, 30, 40, 50);
write(d);
d = Date.UTC(1, 9, 24, 0, 20, 30, 40);
write(d);
d = Date.UTC(74, 9, 24, 0, 20, 30, 40, 50);
write(d);
d = Date.UTC("hello");
write(d);
d = Date.UTC();
write(d);
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
// #FailureMessage Object: 0x7f7acc7f6700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5634c5d8da82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5634c5d8c2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5634c5d80546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5634c5d7fd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5634c789913e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5634c7c647a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5634c77f63eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5634c77a4150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5634c77a0fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5634c74f75d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5634c74ee7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5634c5f6ccb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5634c74f1588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5634c5d9114f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5634c5d9c925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5634c5d89650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f7add4c2ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f7add554850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 135ms
