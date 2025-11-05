const v2 = RegExp.prototype;
function f4(a5) {
    let v6 = WebAssembly.JSTag;
    v6.__proto__ = BigUint64Array;
    return this;
}
Object.defineProperty(v2, "exec", { value: f4 });
("searchme").search(f4);
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
// #FailureMessage Object: 0x7f3509040700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x555a253afa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x555a253ae2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x555a253a2546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x555a253a1d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x555a26ebb13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x555a272867a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x555a26e183eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x555a26dc6150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x555a26dc2fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x555a26b195d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x555a26b107e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x555a2558ecb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x555a26b13588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x555a253b314f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x555a253be925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x555a253ab650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f35123f7ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f3512489850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 120ms
