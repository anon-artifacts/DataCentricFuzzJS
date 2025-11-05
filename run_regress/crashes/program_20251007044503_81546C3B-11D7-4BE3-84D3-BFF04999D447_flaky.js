function foo(a1) {
    var result = 0;
    for (let i5 = 0; i5 < a1.length; ++i5) {
        result <<= 1;
        result ^= "foo" in a1[i5];
    }
    return result;
}
function bar() {
    const v17 = { foo: 42 };
    var array = [v17,{ foo: 42 }];
    var result = 0;
    for (let i25 = 0; i25 < 1000000; ++i25) {
        result += foo(array);
    }
    return result;
}
var result = bar();
if (result != 3000000) {
    throw "Bad result: " + result;
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
// #FailureMessage Object: 0x7fbc808ca700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x556278f87a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x556278f862a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x556278f7a546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x556278f79d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55627aa9313e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55627ae5e7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55627a9f03eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55627a99e150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55627a99afd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55627a6f15d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55627a6e87e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x556279166cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55627a6eb588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x556278f8b14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x556278f96925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x556278f83650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fbc8d488ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fbc8d51a850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 123ms
