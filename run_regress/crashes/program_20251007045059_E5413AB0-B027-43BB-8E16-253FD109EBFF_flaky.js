function* f() {
    x.__defineGetter__();
    var x = 0;
    for (const v6 of iterable) {
        yield v6;
    }
}
f();
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
// #FailureMessage Object: 0x7f9f19089700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55682951aa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5568295192a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55682950d546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55682950cd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55682b02613e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55682b3f17a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55682af833eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55682af31150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55682af2dfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55682ac845d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55682ac7b7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5568296f9cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55682ac7e588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55682951e14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x556829529925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x556829516650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f9f2744aac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f9f274dc850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 134ms
