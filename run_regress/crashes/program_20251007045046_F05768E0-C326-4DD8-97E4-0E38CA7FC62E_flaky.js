function f0() {
}
var BUGNUMBER = 456470;
var summary = "TM: Make sure JSOP_DEFLOCALFUN pushes the right function object.";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function x() {
        function a() {
            return true;
        }
        return a();
    }
    for (let i19 = 0; i19 < 10; ++i19) {
        x();
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
// #FailureMessage Object: 0x7f6c4cd5c700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5647c17eba82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5647c17ea2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5647c17de546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5647c17ddd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5647c32f713e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5647c36c27a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5647c32543eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5647c3202150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5647c31fefd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5647c2f555d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5647c2f4c7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5647c19cacb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5647c2f4f588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5647c17ef14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5647c17fa925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5647c17e7650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f6c57115ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f6c571a7850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 120ms
