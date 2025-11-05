function f0() {
}
var BUGNUMBER = 365869;
var summary = "strict warning for object literal with duplicate propery names";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    f0("test crash from bug 371292 Comment 9");
    try {
        expect = "TypeError: can't redefine non-configurable property 5";
        function f18() {
        }
        ("012345").__defineSetter__(5, f18);
    } catch(e21) {
        actual = e21 + "";
    }
    f0(expect, actual, summary);
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
// #FailureMessage Object: 0x7fb2d188e700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5557d2175a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5557d21742a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5557d2168546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5557d2167d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5557d3c8113e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5557d404c7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5557d3bde3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5557d3b8c150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5557d3b88fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5557d38df5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5557d38d67e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5557d2354cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5557d38d9588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5557d217914f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5557d2184925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5557d2171650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fb2ddc4bac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fb2ddcdd850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 139ms
