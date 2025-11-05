const v4 = Array.prototype[Symbol.iterator];
const t1 = Object.prototype;
t1[Symbol.iterator] = v4;
var s;
function g(a11) {
    for (const v12 of a11) {
        s += v12;
    }
}
function f() {
    g(arguments);
}
s = "";
f(1, 2, 3);
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
// #FailureMessage Object: 0x7f8e2363c700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x560109af9a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x560109af82a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x560109aec546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x560109aebd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x56010b60513e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x56010b9d07a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x56010b5623eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x56010b510150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x56010b50cfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x56010b2635d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x56010b25a7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x560109cd8cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x56010b25d588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x560109afd14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x560109b08925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x560109af5650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f8e2c9f3ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f8e2ca85850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 174ms
