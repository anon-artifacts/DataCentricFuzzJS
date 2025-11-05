function AsmModule(a1, a2, a3) {
    'use asm';
    var m1 = a1.Math.fround;
    var func1 = a2.fun1;
    const t4 = a1.Float32Array;
    const v10 = new t4(a3);
    var HEAP8 = v10;
    function f1() {
        var x = m1(1.5);
        return m1(x = m1(HEAP8[1]));
    }
    return f1;
}
var global = { Math: Math, Float32Array: Float32Array };
function f23(a24, a25, a26, a27, a28, a29, a30, a31) {
    print(a24, a25, a26, a27, a28, a29, a30, a31);
}
function f34(a35, a36) {
    print(a35, a36);
}
const v45 = {
    fun1: f23,
    fun2: f34,
    x: 155,
    i2: 658,
    d1: 68.25,
    d2: 3.14156,
    f1: 48.1523,
    f2: 14896.2514,
};
var env = v45;
const v51 = new ArrayBuffer(1 << 20);
var buffer = v51;
var asmModule = AsmModule(global, env, buffer);
print(asmModule());
print(asmModule());
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
// #FailureMessage Object: 0x7f592694e700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55de4eb93a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55de4eb922a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55de4eb86546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55de4eb85d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55de5069f13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55de50a6a7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55de505fc3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55de505aa150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55de505a6fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55de502fd5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55de502f47e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55de4ed72cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55de502f7588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55de4eb9714f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55de4eba2925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55de4eb8f650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f5930d07ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f5930d99850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 124ms
