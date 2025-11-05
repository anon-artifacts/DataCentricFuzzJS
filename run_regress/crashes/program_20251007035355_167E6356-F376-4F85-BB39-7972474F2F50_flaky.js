function f0(a1, a2, a3) {
    'use asm';
    const t2 = a1.Uint8Array;
    const v5 = new t2(a3);
    var Uint8ArrayView = v5;
    const t5 = a1.Int16Array;
    const v8 = new t5(a3);
    var Int16ArrayView = v8;
    function f(a11, a12) {
        a11 = +a11;
        a12 = a12 | 0;
        var i4 = 0;
        i4 = 0 ? 0 : Uint8ArrayView[0];
        return +(-7.555786372591432e+22);
    }
    return f;
}
var asmModule = f0;
const v30 = new ArrayBuffer(1 << 24);
var asmHeap = v30;
var asmFun = asmModule(this, {}, asmHeap);
asmFun();
function f37(a38, a39, a40) {
    'use asm';
    const t24 = a38.Uint8Array;
    const v42 = new t24(a40);
    var Uint8ArrayView = v42;
    const t27 = a38.Int16Array;
    const v45 = new t27(a40);
    var Int16ArrayView = v45;
    function f(a48, a49) {
        a48 = +a48;
        a49 = a49 | 0;
        var i4 = 0;
        i4 = 0 ? Uint8ArrayView[0] : 0;
        return +(-7.555786372591432e+22);
    }
    return f;
}
var asmModule = f37;
var asmFun = asmModule(this, {}, asmHeap);
asmFun();
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
// #FailureMessage Object: 0x7f08ac874700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x559622e10a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x559622e0f2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x559622e03546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x559622e02d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55962491c13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x559624ce77a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5596248793eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x559624827150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x559624823fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55962457a5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5596245717e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x559622fefcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x559624574588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x559622e1414f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x559622e1f925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x559622e0c650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f08b642cac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f08b64be850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 197ms
