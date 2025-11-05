function f(a1) {
    var sum = 0;
    for (const v4 in a1) {
        var i = a1[v4];
        var x = i + 2;
        var y = x + 5;
        var z = y + 3;
        sum += z;
    }
    return sum;
}
const v18 = new Array(10000);
var a = v18;
for (let i21 = 0; i21 < 10000; i21++) {
    a[i21] = (i21 * 999) % 77;
}
for (let i32 = 0; i32 < 3; i32++) {
    f(a);
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
// #FailureMessage Object: 0x7f9078f6f700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55c56c3aba82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55c56c3aa2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55c56c39e546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55c56c39dd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55c56deb713e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55c56e2827a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55c56de143eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55c56ddc2150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55c56ddbefd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55c56db155d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55c56db0c7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55c56c58acb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55c56db0f588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55c56c3af14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55c56c3ba925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55c56c3a7650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f908532cac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f90853be850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 279ms
