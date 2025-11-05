function foo(a1) {
    var result = ["",""];
    for (let i7 = 0; i7 < 100000; ++i7) {
        const v15 = a1[i7 & 1];
        result[i7 & 1] = v15;
    }
    return result;
}
const t8 = Object.prototype;
t8[1] = 42;
var result = foo("x");
if (result[0] != "x") {
    throw "Bad result[0]: " + result[0];
}
if (result[1] != 42) {
    throw "Bad result[1]: " + result[1];
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
// #FailureMessage Object: 0x7f594a83b700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5616a078ba82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5616a078a2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5616a077e546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5616a077dd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5616a229713e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5616a26627a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5616a21f43eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5616a21a2150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5616a219efd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5616a1ef55d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5616a1eec7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5616a096acb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5616a1eef588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5616a078f14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5616a079a925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5616a0787650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f59543f3ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f5954485850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 203ms
