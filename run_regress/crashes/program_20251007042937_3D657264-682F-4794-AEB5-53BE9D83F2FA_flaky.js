console.log("Tests effect of mutating Arguments object's structure.");
function foo() {
    arguments.a = true;
    return arguments.a;
}
for (let i9 = 0; i9 < 200; i9++) {
    foo();
}
foo();
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
// #FailureMessage Object: 0x7fdb27c07700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55a7b7313a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55a7b73122a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55a7b7306546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55a7b7305d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55a7b8e1f13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55a7b91ea7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55a7b8d7c3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55a7b8d2a150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55a7b8d26fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55a7b8a7d5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55a7b8a747e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55a7b74f2cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55a7b8a77588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55a7b731714f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55a7b7322925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55a7b730f650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fdb357c7ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fdb35859850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 121ms
