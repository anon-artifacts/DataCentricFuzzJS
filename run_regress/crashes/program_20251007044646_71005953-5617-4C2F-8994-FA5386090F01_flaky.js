try {
    function f0() {
    }
    let v2;
    try { v2 = newGlobal(); } catch (e) {}
    var g = v2;
    var arr = [1,2,3];
    for (const v10 of anyTypedArrayConstructors) {
        let v11;
        try { v11 = new v10(arr); } catch (e) {}
        var tarr = v11;
        for (const v13 of anyTypedArrayConstructors) {
            let v14;
            try { v14 = new v13(tarr); } catch (e) {}
            var copied = v14;
            copied?.buffer?.byteLength;
            arr?.length * v13?.BYTES_PER_ELEMENT;
            g.tarr = tarr;
            const v22 = `new ${v13?.name}(tarr);`;
            let v23;
            try { v23 = g.eval(v22); } catch (e) {}
            (copied = v23)?.buffer?.byteLength;
            arr?.length * v13?.BYTES_PER_ELEMENT;
        }
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
} catch(e35) {
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
// #FailureMessage Object: 0x7fa66d32c700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55e67f24ba82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55e67f24a2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55e67f23e546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55e67f23dd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55e680d5713e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55e6811227a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55e680cb43eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55e680c62150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55e680c5efd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55e6809b55d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55e6809ac7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55e67f42acb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55e6809af588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55e67f24f14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55e67f25a925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55e67f247650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fa677ee6ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fa677f78850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 141ms
