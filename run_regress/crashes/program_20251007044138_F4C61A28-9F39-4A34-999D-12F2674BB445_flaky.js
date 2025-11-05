for (let v0 = 0; v0 < 250; v0++) {
    for (const v2 in undefined) {
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
// #FailureMessage Object: 0x7f37237e4700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x563bb29d2a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x563bb29d12a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x563bb29c5546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x563bb29c4d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x563bb44de13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x563bb48a97a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x563bb443b3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x563bb43e9150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x563bb43e5fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x563bb413c5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x563bb41337e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x563bb2bb1cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x563bb4136588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x563bb29d614f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x563bb29e1925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x563bb29ce650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f372ebafac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f372ec41850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: ApiMethodCallGenerator, ObjectLiteralElementGenerator, ObjectLiteralPropertyGenerator, ClassInstanceMethodGenerator, IntArrayGenerator, PropertyAssignmentGenerator, ObjectBuilderFunctionGenerator, ClassDefinitionGenerator, ClassPrivateInstancePropertyGenerator, FunctionCallGenerator, ObjectLiteralCopyPropertiesGenerator, SpliceMutator, ObjectLiteralSetterGenerator
// EXECUTION TIME: 150ms
