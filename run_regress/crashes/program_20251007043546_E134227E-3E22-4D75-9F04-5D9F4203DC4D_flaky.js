function f(a1) {
    if (a1 == 0) {
        return 1 << one;
    }
    return f(a1 - 1) << one;
}
var one = 1;
for (let i15 = 0; i15 < 5; i15++) {
    1 << 5;
    f(4);
}
1 << 5;
f(4);
function f31() {
    return 1;
}
var one = { valueOf: f31 };
1 << 5;
f(4);
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
// #FailureMessage Object: 0x7fc2a22b1700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5571a7786a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5571a77852a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5571a7779546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5571a7778d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5571a929213e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5571a965d7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5571a91ef3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5571a919d150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5571a9199fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5571a8ef05d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5571a8ee77e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5571a7965cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5571a8eea588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5571a778a14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5571a7795925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5571a7782650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fc2b0672ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fc2b0704850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 177ms
