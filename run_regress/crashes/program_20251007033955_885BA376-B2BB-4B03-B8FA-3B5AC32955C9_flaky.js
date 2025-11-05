var target = {};
var called = false;
function f4(a5) {
    called = true;
    return [];
}
var handler = { ownKeys: f4 };
const v13 = new Proxy(target, handler);
for (const v17 of [v13,Proxy.revocable(target, handler).proxy]) {
    Object.getOwnPropertyNames(v17).length;
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
// #FailureMessage Object: 0x7f8f5faea700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55b49769ea82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55b49769d2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55b497691546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55b497690d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55b4991aa13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55b4995757a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55b4991073eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55b4990b5150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55b4990b1fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55b498e085d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55b498dff7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55b49787dcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55b498e02588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55b4976a214f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55b4976ad925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55b49769a650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f8f6c6a8ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f8f6c73a850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 114ms
