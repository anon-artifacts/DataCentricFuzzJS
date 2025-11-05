class C2 {
    static {
        const v4 = this.e;
        try { v4("undefined", v4, this, C2); } catch (e) {}
        %VerifyType(61530);
        function f6() {
            return "undefined";
        }
    }
    static 8 = "undefined";
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
// #FailureMessage Object: 0x7f5c5a9c8700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55f818c53a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55f818c522a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55f818c46546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55f818c45d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55f81a75f13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55f81ab2a7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55f81a6bc3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55f81a66a150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55f81a666fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55f81a3bd5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55f81a3b47e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55f818e32cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55f81a3b7588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55f818c5714f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55f818c62925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55f818c4f650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f5c65582ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f5c65614850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 165ms
