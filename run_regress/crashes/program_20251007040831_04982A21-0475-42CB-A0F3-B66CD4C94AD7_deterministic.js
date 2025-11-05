function foo(a1) {
    var o = a1;
    var result = 0;
    for (const v5 in o) {
        if ((result += o?.[v5]) >= 3) {
            o = { 0: 1, 1: 2, a: 3, b: 4 };
        }
    }
    return result;
}
try { noInline(foo); } catch (e) {}
for (let i17 = 0; i17 < 10000; ++i17) {
    const v27 = { 0: 0, 1: 1, a: 2, b: 3 };
    let v28;
    try { v28 = foo(v27); } catch (e) {}
    var result = v28;
    if (result != 7) {
        throw "Error: bad result: " + result;
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
// #FailureMessage Object: 0x7f7c3fad4700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x561befaada82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x561befaac2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x561befaa0546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x561befa9fd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x561bf15b913e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x561bf19847a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x561bf15163eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x561bf14c4150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x561bf14c0fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x561bf12175d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x561bf120e7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x561befc8ccb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x561bf1211588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x561befab114f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x561befabc925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x561befaa9650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f7c4b690ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f7c4b722850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 264ms
