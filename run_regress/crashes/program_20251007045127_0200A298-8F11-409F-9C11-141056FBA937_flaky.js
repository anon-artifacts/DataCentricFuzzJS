try {
    function test() {
        function f1() {
        }
        var foo = f1;
        function baz() {
        }
        var bar = baz;
        return (foo?.name === "foo") && (bar?.name === "baz");
    }
    let v12;
    try { v12 = test(); } catch (e) {}
    if (!v12) {
        let v16;
        try { v16 = new Error("Test failed"); } catch (e) {}
        throw v16;
    }
} catch(e17) {
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
// #FailureMessage Object: 0x7f8eaec1b700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x559616dd7a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x559616dd62a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x559616dca546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x559616dc9d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5596188e313e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x559618cae7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5596188403eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5596187ee150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5596187eafd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5596185415d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5596185387e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x559616fb6cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55961853b588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x559616ddb14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x559616de6925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x559616dd3650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f8eb7fd2ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f8eb8064850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 145ms
