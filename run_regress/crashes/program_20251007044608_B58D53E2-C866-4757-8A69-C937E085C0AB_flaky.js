let p = Object.create({ foo: 1 });
let o = Object.create(p);
let other = { foo: 10 };
function foo() {
    return o.foo;
}
for (let i13 = 0; i13 < 10; i13++) {
    foo();
}
p.foo = null;
gc();
if (foo() !== null) {
    const v28 = new Error("bad get by id access");
    throw v28;
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
// #FailureMessage Object: 0x7f479bf2e700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55afd7c16a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55afd7c152a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55afd7c09546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55afd7c08d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55afd972213e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55afd9aed7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55afd967f3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55afd962d150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55afd9629fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55afd93805d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55afd93777e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55afd7df5cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55afd937a588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55afd7c1a14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55afd7c25925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55afd7c12650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f47a92edac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f47a937f850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 168ms
