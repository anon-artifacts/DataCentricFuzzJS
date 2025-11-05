console.log("This tests that ToString(Symbol) behaviors.");
String(Symbol.iterator);
try {
    String(Symbol.prototype);
} catch(e9) {
}
const v10 = Symbol.iterator;
Symbol.prototype.toString.call(v10);
const v15 = Symbol("hello");
Symbol.prototype.toString.call(v15);
const v19 = Symbol();
Symbol.prototype.toString.call(v19);
const v23 = Symbol();
Object.prototype.toString.call(v23);
const v28 = Symbol.prototype;
Object.prototype.toString.call(v28);
Object.prototype.toString.call(Symbol);
successfullyParsed = true;
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
// #FailureMessage Object: 0x7f2dd5fab700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5636a5228a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5636a52272a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5636a521b546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5636a521ad95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5636a6d3413e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5636a70ff7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5636a6c913eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5636a6c3f150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5636a6c3bfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5636a69925d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5636a69897e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5636a5407cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5636a698c588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5636a522c14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5636a5237925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5636a5224650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f2ddf362ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f2ddf3f4850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 118ms
