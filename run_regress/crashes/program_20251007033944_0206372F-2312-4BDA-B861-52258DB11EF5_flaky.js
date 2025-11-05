const v2 = {
    get hello() {
        return 42;
    },
};
var object = v2;
function ok() {
    var value = "hello";
    if ((object?.[value] + 20) !== 62) {
        let v13;
        try { v13 = new Error(); } catch (e) {}
        throw v13;
    }
}
try { noInline(ok); } catch (e) {}
for (let i17 = 0; i17 < 10000; ++i17) {
    try { ok(); } catch (e) {}
}
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55c2f6e37d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55c2f895113e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55c2f8d1c7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55c2f88ae3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55c2f885c150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55c2f8858fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55c2f85af5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55c2f85a67e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55c2f7024cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55c2f85a9588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55c2f6e4914f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55c2f6e54925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55c2f6e41650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f662fa66ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f662faf8850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 135ms
