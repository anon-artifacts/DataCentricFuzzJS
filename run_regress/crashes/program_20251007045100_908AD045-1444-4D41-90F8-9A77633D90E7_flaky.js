try {
    function f1() {
    }
    Object.prototype.__defineGetter__(0, f1);
} catch(e6) {
    print("Caught: " + e6);
}
try {
    function f11() {
        let asyncIds = [];
        let triggerIds = [];
        async function foo() {
        }
        foo();
    }
    f11();
} catch(e19) {
    print("Caught: " + e19);
}
try {
    var obj = { prop: 7 };
} catch(e28) {
    print("Caught: " + e28);
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
// #FailureMessage Object: 0x7faf6606e700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x557b62d39a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x557b62d382a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x557b62d2c546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x557b62d2bd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x557b6484513e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x557b64c107a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x557b647a23eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x557b64750150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x557b6474cfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x557b644a35d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x557b6449a7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x557b62f18cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x557b6449d588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x557b62d3d14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x557b62d48925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x557b62d35650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7faf74c30ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7faf74cc2850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 136ms
