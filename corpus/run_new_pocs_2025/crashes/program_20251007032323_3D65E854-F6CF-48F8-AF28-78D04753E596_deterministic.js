function main() {
    const v3 = new Float32Array(38642);
    var v2 = v3;
    const v6 = { get: Object };
    const v4 = 1;
    async function v7(a11, a12, a13) {
        for (const v14 in v2) {
            const v33 = await v4;
        }
    }
    const v14 = v7();
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
// #FailureMessage Object: 0x7f9f557f8700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55a20e768a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55a20e7672a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55a20e75b546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55a20e75ad95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55a21027413e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55a21063f7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55a2101d13eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55a21017f150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55a21017bfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55a20fed25d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55a20fec97e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55a20e947cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55a20fecc588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55a20e76c14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55a20e777925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55a20e764650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f9f6f4ffac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f9f6f591850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_new_pocs_2025 --importCorpus=poc_negatives_300 --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --maglev --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 177ms
