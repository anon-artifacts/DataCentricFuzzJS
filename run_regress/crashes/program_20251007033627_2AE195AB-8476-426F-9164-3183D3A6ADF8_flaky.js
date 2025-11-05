const v0 = {};
function f1(a2) {
    return { ...v0, __proto__: v0, c: a2 };
}
f1();
f1();
function f6(a7, a8) {
    const v10 = Symbol.dispose;
    const v12 = {
        [v10]() {
        },
    };
    using v13 = v12;
}
f6(f6, v0);
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
// #FailureMessage Object: 0x7f0f30d9a700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55a8db44ba82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55a8db44a2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55a8db43e546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55a8db43dd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55a8dcf5713e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55a8dd3227a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55a8dceb43eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55a8dce62150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55a8dce5efd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55a8dcbb55d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55a8dcbac7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55a8db62acb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55a8dcbaf588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55a8db44f14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55a8db45a925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55a8db447650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f0f3e159ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f0f3e1eb850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 135ms
