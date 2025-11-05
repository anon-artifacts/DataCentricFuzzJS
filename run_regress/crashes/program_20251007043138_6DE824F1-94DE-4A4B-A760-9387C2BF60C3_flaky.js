var patterns = ["[_]","[a, b, _]","[[_]]","[[], [{}, [_]]]","{x:_}","{x:y, z:_}","{0:_}","{_}","[..._]"];
for (const v11 of patterns) {
    var stmt = v11 + " = obj";
    if (stmt[0] == "{") {
        stmt = ("(" + stmt) + ")";
    }
    stmt += ";";
    Function(stmt);
    for (const v28 of ["eval","arguments"]) {
        var s = stmt.replace("_", v28);
        Function(s);
        const v33 = () => {
            const v35 = "'use strict'; " + s;
            let v36;
            try { v36 = Function(v35); } catch (e) {}
            return v36;
        };
        v33();
    }
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
// #FailureMessage Object: 0x7f84b7467700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55a93d4a6a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55a93d4a52a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55a93d499546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55a93d498d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55a93efb213e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55a93f37d7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55a93ef0f3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55a93eebd150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55a93eeb9fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55a93ec105d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55a93ec077e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55a93d685cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55a93ec0a588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55a93d4aa14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55a93d4b5925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55a93d4a2650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f84c3023ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f84c30b5850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 134ms
