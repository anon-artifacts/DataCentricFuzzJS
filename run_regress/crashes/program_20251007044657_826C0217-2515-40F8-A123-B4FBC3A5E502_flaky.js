try {
    let v1;
    try { v1 = newGlobal(); } catch (e) {}
    x = v1;
    Int32Array = x?.Int32Array;
    let v7;
    try { v7 = new ArrayBuffer(); } catch (e) {}
    x.p = v7;
    try { schedulegc(29); } catch (e) {}
    let v13;
    try { v13 = new Function(); } catch (e) {}
    const v14 = { f: v13 };
    let v15;
    try { v15 = new ArrayBuffer(); } catch (e) {}
    function f16(a17, a18, a19) {
        'use asm';
        const v20 = a17?.Int32Array;
        let v21;
        try { v21 = new v20(a19); } catch (e) {}
        var Int32ArrayView = v21;
        function f() {
            Int32ArrayView?.[1];
        }
        return f;
    }
    try { f16(this, v14, v15); } catch (e) {}
} catch(e26) {
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
// #FailureMessage Object: 0x7f668bea6700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55d5dedeaa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55d5dede92a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55d5deddd546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55d5deddcd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55d5e08f613e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55d5e0cc17a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55d5e08533eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55d5e0801150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55d5e07fdfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55d5e05545d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55d5e054b7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55d5defc9cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55d5e054e588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55d5dedee14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55d5dedf9925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55d5dede6650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f6699265ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f66992f7850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 136ms
