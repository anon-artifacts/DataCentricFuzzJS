try {
    function test() {
        let v4;
        try { v4 = new RegExp("\w", "y"); } catch (e) {}
        var re = v4;
        try { re.exec("xy"); } catch (e) {}
        let v9;
        try { v9 = re.exec("xy"); } catch (e) {}
        return v9?.[0] === "y";
    }
    let v13;
    try { v13 = test(); } catch (e) {}
    if (!v13) {
        let v17;
        try { v17 = new Error("Test failed"); } catch (e) {}
        throw v17;
    }
} catch(e18) {
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
// #FailureMessage Object: 0x7f440ce12700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x557e72024a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x557e720232a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x557e72017546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x557e72016d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x557e73b3013e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x557e73efb7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x557e73a8d3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x557e73a3b150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x557e73a37fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x557e7378e5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x557e737857e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x557e72203cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x557e73788588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x557e7202814f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x557e72033925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x557e72020650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f44151c7ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f4415259850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 156ms
