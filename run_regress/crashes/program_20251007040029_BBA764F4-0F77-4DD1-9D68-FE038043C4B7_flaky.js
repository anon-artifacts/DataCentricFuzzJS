function testSeal() {
    var sloppy = arguments;
    var sym = Symbol();
    sloppy[sym] = 123;
    Object.seal(sloppy);
    Object.isSealed(sloppy);
    var desc = Object.getOwnPropertyDescriptor(sloppy, sym);
    desc.value;
    desc.configurable;
    desc.writable;
}
testSeal();
function testFreeze() {
    var sloppy = arguments;
    var sym = Symbol();
    sloppy[sym] = 123;
    Object.freeze(sloppy);
    Object.isFrozen(sloppy);
    var desc = Object.getOwnPropertyDescriptor(sloppy, sym);
    desc.value;
    desc.configurable;
    desc.writable;
}
testFreeze();
function testIsFrozenAndIsSealed() {
    var sym = Symbol();
    var obj = { [sym]: 123 };
    Object.preventExtensions(obj);
    Object.isFrozen(obj);
    Object.isSealed(obj);
}
testIsFrozenAndIsSealed();
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
// #FailureMessage Object: 0x7f4b28a4c700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55ae170afa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55ae170ae2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55ae170a2546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55ae170a1d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55ae18bbb13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55ae18f867a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55ae18b183eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55ae18ac6150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55ae18ac2fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55ae188195d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55ae188107e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55ae1728ecb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55ae18813588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55ae170b314f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55ae170be925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55ae170ab650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f4b33e07ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f4b33e99850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 143ms
