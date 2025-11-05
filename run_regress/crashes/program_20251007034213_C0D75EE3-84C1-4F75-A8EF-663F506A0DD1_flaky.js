function f1() {
    const v2 = () => {
        return arguments[0];
    };
    return v2;
}
var fn = f1(1);
for (let i8 = 0; i8 < 100000; i8++) {
    if (fn(2) !== 1) {
        throw 0;
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
// #FailureMessage Object: 0x7f32f6e72700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55d3cf70ba82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55d3cf70a2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55d3cf6fe546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55d3cf6fdd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55d3d121713e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55d3d15e27a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55d3d11743eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55d3d1122150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55d3d111efd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55d3d0e755d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55d3d0e6c7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55d3cf8eacb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55d3d0e6f588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55d3cf70f14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55d3cf71a925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55d3cf707650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f330222dac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f33022bf850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 100ms
