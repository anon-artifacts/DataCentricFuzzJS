var stdlib = this;
const v6 = new ArrayBuffer(64 * 1024);
var buffer = v6;
var foreign = {};
function Module(a11, a12, a13) {
    'use asm';
    const t6 = a11.Int16Array;
    const v15 = new t6(a13);
    var MEM16 = v15;
    function load(a18) {
        a18 = a18 | 0;
        a18 = MEM16[a18 >> 1] | 0;
        return a18 | 0;
    }
    function store(a29, a30) {
        a29 = a29 | 0;
        a30 = a30 | 0;
        MEM16[a29 >> 1] = a30;
    }
    function load8(a38) {
        a38 = a38 | 0;
        a38 = MEM16[(a38 + 8) >> 1] | 0;
        return a38 | 0;
    }
    function store8(a51, a52) {
        a51 = a51 | 0;
        a52 = a52 | 0;
        MEM16[(a51 + 8) >> 1] = a52;
    }
    return { load: load, store: store, load8: load8, store8: store8 };
}
var m = Module(stdlib, foreign, buffer);
m.load(-8);
m.load8(-16);
m.store(0, 42);
m.load8(-8);
m.store8(-8, 99);
m.load(0);
m.load8(-8);
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
// #FailureMessage Object: 0x7f8d4d7f8700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x560a3c1dfa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x560a3c1de2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x560a3c1d2546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x560a3c1d1d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x560a3dceb13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x560a3e0b67a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x560a3dc483eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x560a3dbf6150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x560a3dbf2fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x560a3d9495d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x560a3d9407e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x560a3c3becb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x560a3d943588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x560a3c1e314f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x560a3c1ee925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x560a3c1db650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f8d75ab3ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f8d75b45850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 102ms
