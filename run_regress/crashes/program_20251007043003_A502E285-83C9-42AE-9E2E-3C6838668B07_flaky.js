function f0() {
    return [];
}
var Ctor = f0;
var a = ["one","two","three"];
a.constructor = {};
const t6 = a.constructor;
t6[Symbol.species] = Ctor;
function f12() {
    return true;
}
a.filter(f12);
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
// #FailureMessage Object: 0x7f7f7ea19700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x556f6bf27a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x556f6bf262a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x556f6bf1a546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x556f6bf19d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x556f6da3313e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x556f6ddfe7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x556f6d9903eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x556f6d93e150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x556f6d93afd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x556f6d6915d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x556f6d6887e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x556f6c106cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x556f6d68b588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x556f6bf2b14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x556f6bf36925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x556f6bf23650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f7f8cddaac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f7f8ce6c850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 140ms
