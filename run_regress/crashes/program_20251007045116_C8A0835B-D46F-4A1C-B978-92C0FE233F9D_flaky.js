function f() {
    var sum = 0;
    for (let i4 = 0; i4 < 10; i4++) {
        for (let i11 = 0; i11 < 10; i11++) {
            var x = i4 + 2;
            var y = x + 5;
            var z = y + 3;
            sum += z;
        }
    }
    return sum;
}
f();
f();
f();
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
// #FailureMessage Object: 0x7f212e663700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55c2c7b20a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55c2c7b1f2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55c2c7b13546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55c2c7b12d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55c2c962c13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55c2c99f77a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55c2c95893eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55c2c9537150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55c2c9533fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55c2c928a5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55c2c92817e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55c2c7cffcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55c2c9284588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55c2c7b2414f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55c2c7b2f925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55c2c7b1c650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f2138a1cac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f2138aae850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 158ms
