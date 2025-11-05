function test2() {
    with ({}) {
        try {
            const v6 = -3 / 0;
            const v10 = -3 / 0;
            const v11 = {};
            rzkvjs = v11;
            const v16 = -3 / 0;
            const v17 = {};
            rzkvjs = v17;
            const v22 = -3 / 0;
            const v26 = -3 / 0;
            const v27 = {};
            rzkvjs = v27;
            const v29 = {};
            rzkvjs = v29;
            const v34 = -3 / 0;
            const v38 = -3 / 0;
            const v39 = {};
            rzkvjs = v39;
            const v41 = {};
            rzkvjs = v41;
            const v43 = {};
            rzkvjs = v43;
            const v48 = -3 / 0;
            const v49 = {};
            rzkvjs = v49;
            const v51 = {};
            rzkvjs = v51;
            const v56 = -3 / 0;
            const v57 = {};
            rzkvjs = v57;
            const v59 = new Array(v6, v10, v11, v16, v17, v22, v26, v27, v29, v34, v38, v39, v41, v43, v48, v49, v51, v56, v57);
            for (const v60 in v59) {
                try {
                    try {
                        function f61() {
                            const v64 = this.zzz.zzz;
                            fxwkkq = v64;
                            return v64;
                        }
                        f61();
                    } finally {
                    }
                } catch(e67) {
                }
            }
        } catch(e68) {
        }
    }
}
test2();
test2();
test2();
WScript.Echo("Passed");
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
// #FailureMessage Object: 0x7fd8541da700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55c0672f0a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55c0672ef2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55c0672e3546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55c0672e2d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55c068dfc13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55c0691c77a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55c068d593eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55c068d07150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55c068d03fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55c068a5a5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55c068a517e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55c0674cfcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55c068a54588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55c0672f414f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55c0672ff925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55c0672ec650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fd86259bac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fd86262d850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 211ms
