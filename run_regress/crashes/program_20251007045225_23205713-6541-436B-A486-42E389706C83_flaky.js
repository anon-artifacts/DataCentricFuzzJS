function f(a1) {
    function* g() {
        function f3() {
            return a1;
        }
        yield f3;
    }
    if (a1 == 8) {
        return g();
    }
    a1 = 3;
}
var x;
for (let i12 = 0; i12 < 9; i12++) {
    x = f(i12);
}
x.next().value();
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
// #FailureMessage Object: 0x7f7ee5ecc700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55bc12daca82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55bc12dab2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55bc12d9f546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55bc12d9ed95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55bc148b813e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55bc14c837a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55bc148153eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55bc147c3150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55bc147bffd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55bc145165d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55bc1450d7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55bc12f8bcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55bc14510588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55bc12db014f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55bc12dbb925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55bc12da8650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f7ef528fac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f7ef5321850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 164ms
