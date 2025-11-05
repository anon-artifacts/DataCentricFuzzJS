function f(a1) {
    for (let i3 = 0; i3 < 10; i3++) {
        arr = /foo(ba(r))?/.exec(a1);
        var x = (((arr[0] + " ") + arr[1]) + " ") + arr[2];
    }
}
f("foobar");
f("foo");
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
// #FailureMessage Object: 0x7f3373f5e700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x558084b03a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x558084b022a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x558084af6546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x558084af5d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55808660f13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5580869da7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55808656c3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55808651a150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x558086516fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55808626d5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5580862647e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x558084ce2cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x558086267588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x558084b0714f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x558084b12925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x558084aff650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f337cb14ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f337cba6850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 141ms
