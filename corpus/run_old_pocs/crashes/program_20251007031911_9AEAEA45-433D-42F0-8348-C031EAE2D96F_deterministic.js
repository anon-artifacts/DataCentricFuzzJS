function main() {
    const v1 = [0];
    const v5 = [12.42,isNaN,"[a-b-c]"];
    for (const v9 of v5) {
        try {
            const v8 = { a: 12.42 };
            for (const v14 in this) {
                const v11 = this[v14];
                const v12 = v8.__proto__;
                v12.toString = v11;
            }
            try {
                for (const v21 in this) {
                    const v15 = this[v21];
                    delete this[v21];
                    const v16 = v15(this);
                    delete this[this];
                }
            } catch(e33) {
            }
            for (const v35 in this) {
                const v20 = this[v35];
                const v21 = v20 - 1;
            }
            for (const v43 in this) {
                const v24 = this[v43];
                const v25 = v1.forEach(v24);
            }
        } catch(e49) {
        }
    }
    for (const v51 in this) {
        const v31 = this[v51];
        const v32 = v31(2);
        try {
            for (const v59 in this) {
                const v38 = this[v59];
                const v39 = v38(2);
            }
        } catch(e66) {
            v32.constructor = URIError;
        }
    }
}
main();
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
// #FailureMessage Object: 0x7f25d6ffb700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x56081e373a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x56081e3722a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x56081e366546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x56081e365d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x56081fe7f13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x56082024a7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x56081fddc3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x56081fd8a150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x56081fd86fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x56081fadd5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x56081fad47e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x56081e552cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x56081fad7588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x56081e37714f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x56081e382925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x56081e36f650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f25f5818ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f25f58aa850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_old_pocs --importCorpus=corpus_old_pocs --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --maglev --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 168ms
