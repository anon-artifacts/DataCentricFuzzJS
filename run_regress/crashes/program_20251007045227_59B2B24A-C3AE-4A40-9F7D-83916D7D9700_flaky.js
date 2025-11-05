function test(a1) {
    function nest() {
        {
            function foo() {
                console.log("pass");
            }
        }
        a1();
    }
    nest();
}
const v9 = () => {
    return console.log("fail");
};
test(v9);
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
// #FailureMessage Object: 0x7f2b367fa700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5616159f0a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5616159ef2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5616159e3546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5616159e2d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5616174fc13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5616178c77a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5616174593eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x561617407150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x561617403fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x56161715a5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5616171517e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x561615bcfcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x561617154588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5616159f414f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5616159ff925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5616159ec650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f2b44b2bac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f2b44bbd850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 125ms
