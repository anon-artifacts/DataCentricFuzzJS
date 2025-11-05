function f0() {
    function f1() {
        var sum = 0;
        var a = [1,2,3];
        a.foo = 42;
        for (let v10 in a) {
            sum += a?.[v10 = "foo"];
        }
        return sum;
    }
    var foo = f1;
    try { noInline(foo); } catch (e) {}
    for (let i17 = 0; i17 < 10000; ++i17) {
        let v23;
        try { v23 = foo(); } catch (e) {}
        if (v23 != (42 * 4)) {
            let v30;
            try { v30 = new Error("bad result"); } catch (e) {}
            throw v30;
        }
    }
    try { foo(null); } catch (e) {}
}
try { f0(); } catch (e) {}
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// [COV] edge counters initialized. Shared memory: shm_id_1162266_0 with 1587369 edges
// V8 is running with experimental features enabled. Stability and security will suffer.
// 
// 
// #
// # Fatal error in ../../src/maglev/maglev-assembler-inl.h, line 777
// # Debug check failed: !allow_allocate() implies builtin == Builtin::kDoubleToI || !BuiltinCanAllocate(builtin).
// #
// #
// #
// #FailureMessage Object: 0x7f78097f8700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x563a1d2bda82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x563a1d2bc2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x563a1d2b0546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x563a1d2afd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x563a1edc913e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x563a1f1947a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x563a1ed263eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x563a1ecd4150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x563a1ecd0fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x563a1ea275d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x563a1ea1e7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x563a1d49ccb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x563a1ea21588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x563a1d2c114f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x563a1d2cc925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x563a1d2b9650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f78183b6ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f7818448850]
// Received signal 6
// STDOUT:
// Warning: unknown flag --experimental-wasm-memory64.
// Try --help for options
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 138ms
