function f0() {
    function bench(a2, a3, a4) {
        const v6 = new Date();
        var start = v6;
        var result = a3(a4);
        const v10 = new Date();
        var end = v10;
        const verbose = false;
        if (verbose) {
            print(((((a2 + " ") + result) + " ") + (end - start)) + "ms");
        }
    }
    const v26 = new Set();
    var sparseSet = v26;
    for (const v36 of [123,1230,12300,123000,234,2340,23400]) {
        sparseSet.add(v36);
    }
    function f39(a40) {
        var count = 0;
        for (let i44 = 0; i44 < 5000000; ++i44) {
            if (a40.has(i44)) {
                count++;
            }
        }
        return count;
    }
    bench("Sparse Set Property Existence", f39, sparseSet);
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
// #FailureMessage Object: 0x7fa4c7bdf700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55826d834a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55826d8332a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55826d827546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55826d826d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55826f34013e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55826f70b7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55826f29d3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55826f24b150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55826f247fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55826ef9e5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55826ef957e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55826da13cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55826ef98588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55826d83814f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55826d843925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55826d830650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fa4d0795ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fa4d0827850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 127ms
