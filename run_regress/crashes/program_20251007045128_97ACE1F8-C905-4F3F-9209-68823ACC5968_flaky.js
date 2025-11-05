var zero = 0;
var one = 1;
var minus_one = -1;
var two = 2;
var four = 4;
var minus_two = -2;
var minus_four = -4;
-Infinity;
one / -zero;
-Infinity;
one / (zero * minus_one);
-Infinity;
one / (minus_one * zero);
one / (zero * zero);
one / (minus_one * minus_one);
-Infinity;
one / (zero / minus_one);
one / (zero / one);
-Infinity;
one / (minus_four % two);
-Infinity;
one / (minus_four % minus_two);
one / (four % two);
one / (four % minus_two);
-Infinity;
one / (0 * minus_one);
-Infinity;
one / (-1 * zero);
one / (0 * zero);
one / (-1 * minus_one);
-Infinity;
one / (0 / minus_one);
one / (0 / one);
-Infinity;
one / (-4 % two);
-Infinity;
one / (-4 % minus_two);
one / (4 % two);
one / (4 % minus_two);
-Infinity;
one / (zero * -1);
-Infinity;
one / (minus_one * 0);
one / (zero * 0);
one / (minus_one * -1);
-Infinity;
one / (zero / -1);
one / (zero / 1);
-Infinity;
one / (minus_four % 2);
-Infinity;
one / (minus_four % -2);
one / (four % 2);
one / (four % -2);
-Infinity;
one / -0;
-Infinity;
one / (0 * -1);
-Infinity;
one / (-1 * 0);
one / (0 * 0);
one / (-1 * -1);
-Infinity;
one / (0 / -1);
one / (0 / 1);
-Infinity;
one / (-4 % 2);
-Infinity;
one / (-4 % -2);
one / (4 % 2);
one / (4 % -2);
x = 0;
z = 3044;
function foo(a234) {
    var y = -a234 + z;
    return -a234;
}
-0;
foo(x);
-0;
foo(x);
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
// #FailureMessage Object: 0x7fa6cf3e8700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55e1557d2a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55e1557d12a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55e1557c5546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55e1557c4d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55e1572de13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55e1576a97a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55e15723b3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55e1571e9150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55e1571e5fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55e156f3c5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55e156f337e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55e1559b1cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55e156f36588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55e1557d614f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55e1557e1925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55e1557ce650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fa6d879fac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fa6d8831850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 175ms
