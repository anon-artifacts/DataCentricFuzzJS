g = undefined;
function L() {
}
function h() {
    with (h) {
    }
    for (let i5 = 0; i5 < 10; i5++) {
        try { g(); } catch (e) {}
    }
}
function f(a14) {
    g = a14;
}
f(L);
h();
f(L);
f(2);
h();
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
// #FailureMessage Object: 0x7efc5982c700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55bfc493ba82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55bfc493a2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55bfc492e546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55bfc492dd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55bfc644713e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55bfc68127a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55bfc63a43eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55bfc6352150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55bfc634efd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55bfc60a55d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55bfc609c7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55bfc4b1acb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55bfc609f588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55bfc493f14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55bfc494a925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55bfc4937650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7efc67bedac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7efc67c7f850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 152ms
