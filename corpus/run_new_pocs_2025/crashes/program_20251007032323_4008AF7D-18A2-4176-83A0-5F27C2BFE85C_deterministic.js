function main() {
    const v1 = [0];
    const v5 = [0,1,2];
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
                this[v43](0);
            }
        } catch(e47) {
        }
    }
    for (const v49 in this) {
        const v31 = this[v49];
        const v32 = v31(2);
        try {
            for (const v57 in this) {
                const v38 = this[v57];
                const v39 = v38(2);
            }
        } catch(e64) {
            const v65 = %DebugPrint(v32);
            v32.constructor = URIError;
        }
    }
}
delete this.readline;
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
// #FailureMessage Object: 0x7ff800ff7700
// 
// #
// # Fatal error in ../../src/maglev/maglev-assembler-inl.h, line 777
// # Debug check failed: !allow_allocate() implies builtin == Builtin::kDoubleToI || !BuiltinCanAllocate(builtin).
// #
// #
// #
// #FailureMessage Object: 0x7ff8017f8700
// 
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55677c0a4a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55677c0a32a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55677c097546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55677c096d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55677dbb013e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55677df7b7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55677db0d3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55677dabb150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55677dab7fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55677d80e5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55677d8057e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55677c283cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55677d808588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55677c0a814f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55677c0b3925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55677c0a0650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7ff829608ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7ff82969a850]
// Received signal 6
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55677c0a4a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55677c0a32a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55677c097546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55677c096d95]
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_new_pocs_2025 --importCorpus=poc_negatives_300 --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --maglev --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 171ms
