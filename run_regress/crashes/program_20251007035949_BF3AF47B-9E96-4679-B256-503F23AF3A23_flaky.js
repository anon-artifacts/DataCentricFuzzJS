actual = "";
expected = "6,";
var g = 0;
function h(a7) {
    g = a7?.length;
}
function f() {
    try { h(arguments); } catch (e) {}
}
for (let i13 = 0; i13 < 5; ++i13) {
    try { f(10, 20, 30, 40, 50, 60); } catch (e) {}
}
try { appendToActual(g); } catch (e) {}
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
// #FailureMessage Object: 0x7f76dc2d6700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55782640fa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55782640e2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x557826402546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x557826401d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x557827f1b13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5578282e67a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x557827e783eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x557827e26150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x557827e22fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x557827b795d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x557827b707e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5578265eecb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x557827b73588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55782641314f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55782641e925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55782640b650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f76eae98ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f76eaf2a850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 130ms
