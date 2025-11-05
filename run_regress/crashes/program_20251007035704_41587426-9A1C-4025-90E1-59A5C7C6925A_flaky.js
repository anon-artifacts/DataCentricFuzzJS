try {
    function f0() {
        try { readlineBuf(); } catch (e) {}
    }
    try { f0(); } catch (e) {}
    var testBuffers = ["foo\nbar\nbaz\n","foo\nbar\nbaz","foo\n\nbar\nbaz","f","\n","\nf","","Ää\n􏿿"];
    var expected = [["foo","bar","baz"],["foo","bar","baz"],["foo","","bar","baz"],["f"],[""],["","f"],[],["Ää","􏿿"]];
    let v41;
    try { v41 = testBuffers.entries(); } catch (e) {}
    for (const v42 of v41) {
        try { readlineBuf(testValue); } catch (e) {}
        var result = [];
        while ((() => {
                let v48;
                try { v48 = readlineBuf(); } catch (e) {}
                line = v48;
                return v48 != null;
            })()) {
            try { result.push(line); } catch (e) {}
        }
        expected?.[idx];
    }
    const v56 = testBuffers?.[0];
    try { readlineBuf(v56); } catch (e) {}
    try { readlineBuf(); } catch (e) {}
    try { readlineBuf(); } catch (e) {}
    const v61 = testBuffers?.[3];
    try { readlineBuf(v61); } catch (e) {}
    try { readlineBuf(); } catch (e) {}
    expected?.[3]?.[0];
} catch(e66) {
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
// #FailureMessage Object: 0x7f8416c11700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55b056cb1a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55b056cb02a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55b056ca4546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55b056ca3d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55b0587bd13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55b058b887a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55b05871a3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55b0586c8150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55b0586c4fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55b05841b5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55b0584127e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55b056e90cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55b058415588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55b056cb514f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55b056cc0925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55b056cad650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f84257d3ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f8425865850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 139ms
