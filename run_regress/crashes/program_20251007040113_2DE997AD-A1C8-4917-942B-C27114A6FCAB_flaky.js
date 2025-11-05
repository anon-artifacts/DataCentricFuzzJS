function foo() {
    var a = arguments;
    return (a[0] + a[1]) + a[2];
}
function bar(a9, a10, a11) {
    return foo(a10, a11, 42);
}
for (let i15 = 0; i15 < 200000; ++i15) {
    var result = bar(1, 2, 3);
    if (result != 47) {
        throw "Bad result: " + result;
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
// #FailureMessage Object: 0x7f44dbbf1700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55e626e98a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55e626e972a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55e626e8b546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55e626e8ad95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55e6289a413e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55e628d6f7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55e6289013eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55e6288af150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55e6288abfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55e6286025d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55e6285f97e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55e627077cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55e6285fc588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55e626e9c14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55e626ea7925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55e626e94650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f44e57a9ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f44e583b850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 155ms
