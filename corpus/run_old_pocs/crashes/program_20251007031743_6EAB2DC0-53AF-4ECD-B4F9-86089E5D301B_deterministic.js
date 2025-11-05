function opt(a1) {
    const v4 = new String("aa");
    var tmp = v4;
    tmp.x = 2;
    once = 1;
    for (const v9 in tmp) {
        if (once) {
            delete tmp.x;
            once = 0;
        }
        tmp.y = a1;
        tmp.x = 1;
    }
    return [1,tmp.x - 524286];
}
for (let i20 = 0; i20 < 4096; i20++) {
    opt(1);
}
evil = opt(0);
evil[0] = 1.1;
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
// #FailureMessage Object: 0x7efe757f8700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x561351756a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5613517552a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x561351749546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x561351748d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x56135326213e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x56135362d7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5613531bf3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x56135316d150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x561353169fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x561352ec05d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x561352eb77e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x561351935cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x561352eba588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x56135175a14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x561351765925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x561351752650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7efeaa718ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7efeaa7aa850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_old_pocs --importCorpus=corpus_old_pocs --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --maglev --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 133ms
