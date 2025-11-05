function isnegativezero(a1, a2) {
    return !((a1 != 0) || ((1 / a1) >= 0));
}
function test(a12, a13) {
    var result = a12 | 0;
    print(((((result === a13) && (isnegativezero(result) === isnegativezero(a13)) ? "PASS:" : "FAIL: ") + (isnegativezero(a12) ? "-0.0" : a12)) + " ") + (isnegativezero(result) ? "-0.0" : result));
}
var negZero = -0;
test(0, 0);
test(-0, 0);
test(0.1, 0);
test(-0.1, 0);
test(1.1, 1);
test(-1.1, -1);
test(4294967295.5, -1);
test(-4294967295.5, 1);
test(4294967296, 0);
test(-4294967296, 0);
test(4294967297.1, 1);
test(-4294967297.1, -1);
test(2147483647, 2147483647);
test(2147483648, -2147483648);
test(Number.NEGATIVE_INFINITY, 0);
test(Number.POSITIVE_INFINITY, 0);
test(Number.NaN, 0);
test((2147483647 * 2147483647) + 1024, 1024);
test(9223372036854774784, -1024);
test(-9223372036854774784, 1024);
test(9.223372036854776e+18, 0);
test(9.223372036854778e+18, 2048);
test(9.223372036854778e+18, 2048);
test(-9.223372036854776e+18, 0);
test(-9.223372036854778e+18, -2048);
test(-9.223372036854778e+18, -2048);
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
// #FailureMessage Object: 0x7fb4d8959700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x56483510aa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5648351092a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5648350fd546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5648350fcd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x564836c1613e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x564836fe17a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x564836b733eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x564836b21150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x564836b1dfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5648368745d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x56483686b7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5648352e9cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x56483686e588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x56483510e14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x564835119925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x564835106650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fb4e4d16ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fb4e4da8850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 108ms
