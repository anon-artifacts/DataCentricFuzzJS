function foo() {
}
function f1(a2) {
}
var f1 = f1.bind(foo);
function f5() {
}
var f2 = f5;
f1.length;
f2.bind(foo);
f1.length;
var desc = Object.getOwnPropertyDescriptor(f1, "length");
desc.writable;
desc.enumerable;
desc.configurable;
Object.defineProperty(f1, "length", { value: "abc", writable: true });
f1.length;
f1.length = 42;
f1.length;
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
// #FailureMessage Object: 0x7fa325e98700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55632f459a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55632f4582a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55632f44c546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55632f44bd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x556330f6513e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5563313307a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x556330ec23eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x556330e70150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x556330e6cfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x556330bc35d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x556330bba7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55632f638cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x556330bbd588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55632f45d14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55632f468925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55632f455650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fa333a58ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fa333aea850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 187ms
