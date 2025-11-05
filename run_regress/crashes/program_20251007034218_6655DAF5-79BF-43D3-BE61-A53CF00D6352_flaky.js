class C0 {
}
const v1 = new C0();
for (let v3 = 0; v3 < 50; v3++) {
    for (const v4 in v1) {
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
// #FailureMessage Object: 0x7f514026a700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55a667f9aa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55a667f992a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55a667f8d546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55a667f8cd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55a669aa613e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55a669e717a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55a669a033eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55a6699b1150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55a6699adfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55a6697045d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55a6696fb7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55a668179cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55a6696fe588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55a667f9e14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55a667fa9925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55a667f96650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f514b625ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f514b6b7850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: ForInLoopGenerator, TypedArrayGenerator, CodeGenMutator, ComputedSuperPropertyRetrievalGenerator, ClassPrivateStaticMethodGenerator, ComputedPropertyAssignmentGenerator, FloatGenerator, UnaryOperationGenerator, ElementRetrievalGenerator, ClassDefinitionGenerator, ElementAssignmentGenerator, BuiltinObjectInstanceGenerator, ObjectConstructorGenerator, ClassInstanceElementGenerator, ClassStaticMethodGenerator
// EXECUTION TIME: 163ms
