const v3 = [1337,1337,1337,1337];
const v6 = [1337,1337];
function v7(a11) {
    for (const v12 in a11) {
        a11.a = 42;
        const v10 = a11[-698666199];
    }
}
while (true) {
    const v14 = v7(v6);
    const v15 = v7(1337);
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
// #FailureMessage Object: 0x7f7c265ca700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55c48dbdfa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55c48dbde2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55c48dbd2546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55c48dbd1d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55c48f6eb13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55c48fab67a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55c48f6483eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55c48f5f6150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55c48f5f2fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55c48f3495d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55c48f3407e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55c48ddbecb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55c48f343588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55c48dbe314f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55c48dbee925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55c48dbdb650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f7c3598dac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f7c35a1f850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_old_pocs --importCorpus=corpus_old_pocs --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --maglev --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 177ms
