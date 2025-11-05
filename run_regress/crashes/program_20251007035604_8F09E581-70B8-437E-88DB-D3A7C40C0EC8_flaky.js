function f() {
}
var o = {};
function* f3() {
    yield 0;
}
o.gf = f3;
let v6;
try { v6 = o.gf(); } catch (e) {}
let v7;
try { v7 = v6.next(); } catch (e) {}
if (v7?.value === 0) {
    try { WScript.Echo("passed"); } catch (e) {}
} else {
    try { WScript.Echo("failed"); } catch (e) {}
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
// #FailureMessage Object: 0x7fccd8ff7700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55f04959da82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55f04959c2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55f049590546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55f04958fd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55f04b0a913e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55f04b4747a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55f04b0063eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55f04afb4150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55f04afb0fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55f04ad075d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55f04acfe7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55f04977ccb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55f04ad01588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55f0495a114f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55f0495ac925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55f049599650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fccf0001ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fccf0093850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 274ms
