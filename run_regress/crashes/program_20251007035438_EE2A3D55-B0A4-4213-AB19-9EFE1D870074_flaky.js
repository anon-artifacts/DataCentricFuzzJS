for (const v3 of [,null]) {
    function f4() {
        const v6 = Array.prototype;
        Symbol.iterator;
        const v9 = v6[v6];
        try { v9.call(v3); } catch (e) {}
    }
    f4();
    function f13() {
        const v16 = Array.prototype.keys;
        try { v16.call(v3); } catch (e) {}
    }
    f13();
    function f19() {
        const v22 = Array.prototype.entries;
        try { v22.call(v3); } catch (e) {}
    }
    f19();
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
// #FailureMessage Object: 0x7f1c77bb6700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x559f85b6ba82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x559f85b6a2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x559f85b5e546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x559f85b5dd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x559f8767713e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x559f87a427a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x559f875d43eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x559f87582150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x559f8757efd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x559f872d55d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x559f872cc7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x559f85d4acb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x559f872cf588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x559f85b6f14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x559f85b7a925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x559f85b67650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f1c83f73ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f1c84005850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 209ms
