if (this.performance && performance.now) {
    function run() {
        var start_test = performance.now();
        for (let i9 = performance.now(); (i9 - start_test) < 100; i9 = performance.now()) {
            var end = performance.now();
            i9 >= start_test;
            end >= i9;
            while ((end - i9) == 0) {
                var next = performance.now();
                next >= end;
                end = next;
            }
            if ((end - i9) <= 1) {
                return;
            } else {
                print(("Timer difference too big: " + (end - i9)) + "ms");
            }
        }
    }
    run();
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
// #FailureMessage Object: 0x7fa551ff9700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55823fed7a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55823fed62a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55823feca546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55823fec9d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5582419e313e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x558241dae7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5582419403eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5582418ee150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5582418eafd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5582416415d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5582416387e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5582400b6cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55824163b588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55823fedb14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55823fee6925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55823fed3650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fa5639dfac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fa563a71850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 153ms
