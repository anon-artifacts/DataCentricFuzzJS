function __f_0(a1) {
    var __v_0 = -2147483642;
    for (let i6 = 0; i6 < 10; i6++) {
        if (i6 > 5) {
            __v_0 = __v_0 + a1;
            break;
        }
    }
}
for (let i16 = 0; i16 < 100000; i16++) {
    __f_0(42);
}
function f24() {
    return x + y;
}
function f28() {
    return x - y;
}
__v_2 = { f: f24, 2: f28 };
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
// #FailureMessage Object: 0x7f5ebb18e700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55bfe5cfea82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55bfe5cfd2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55bfe5cf1546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55bfe5cf0d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55bfe780a13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55bfe7bd57a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55bfe77673eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55bfe7715150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55bfe7711fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55bfe74685d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55bfe745f7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55bfe5eddcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55bfe7462588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55bfe5d0214f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55bfe5d0d925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55bfe5cfa650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f5ec954fac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f5ec95e1850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 104ms
