function ifInsideLoop() {
    var cond = true;
    var intCond = 5;
    var count = 0;
    for (let i8 = 0; i8 < 100; i8++) {
        if (cond) {
            count++;
        }
        if (intCond) {
            count++;
        }
    }
    return count;
}
ifInsideLoop();
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
// #FailureMessage Object: 0x7f219c10d700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x557e70c25a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x557e70c242a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x557e70c18546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x557e70c17d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x557e7273113e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x557e72afc7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x557e7268e3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x557e7263c150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x557e72638fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x557e7238f5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x557e723867e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x557e70e04cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x557e72389588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x557e70c2914f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x557e70c34925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x557e70c21650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f21a4cc3ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f21a4d55850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 127ms
