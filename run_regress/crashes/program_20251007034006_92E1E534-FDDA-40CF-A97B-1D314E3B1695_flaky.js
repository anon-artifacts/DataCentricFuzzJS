if (this.Worker) {
    const v6 = new Worker("onmessage = function() {}", { type: "string" });
    var __v_7 = v6;
    __v_7.postMessage("");
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
// #FailureMessage Object: 0x7f3145c5e700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55b17b52aa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55b17b5292a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55b17b51d546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55b17b51cd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55b17d03613e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55b17d4017a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55b17cf933eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55b17cf41150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55b17cf3dfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55b17cc945d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55b17cc8b7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55b17b709cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55b17cc8e588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55b17b52e14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55b17b539925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55b17b526650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f315301dac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f31530af850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 144ms
