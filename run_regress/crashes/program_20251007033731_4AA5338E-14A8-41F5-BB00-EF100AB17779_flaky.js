console.log("Tests that doing to-this conversion in strict mode doesn't cause us to believe that if the input is an object then the output is also an object.");
function thingy() {
    'use strict';
    function bar() {
        return this instanceof Object;
    }
    function foo() {
        return bar();
    }
    return foo();
}
for (let i12 = 0; i12 < 200; i12++) {
    thingy();
}
thingy();
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
// #FailureMessage Object: 0x7f7286ceb700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55ade75e2a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55ade75e12a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55ade75d5546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55ade75d4d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55ade90ee13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55ade94b97a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55ade904b3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55ade8ff9150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55ade8ff5fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55ade8d4c5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55ade8d437e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55ade77c1cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55ade8d46588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55ade75e614f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55ade75f1925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55ade75de650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f72928a7ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f7292939850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 130ms
