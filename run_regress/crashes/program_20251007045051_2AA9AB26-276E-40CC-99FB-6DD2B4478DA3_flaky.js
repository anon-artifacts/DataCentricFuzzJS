console.log("Tests whether bytecode codegen properly handles assignment as righthand expression.");
function assign_as_rexp_1() {
    var obj = {};
    var victim = "PASS";
    function f9(a10) {
        victim = "FAIL";
    }
    obj.__defineSetter__("slot", f9);
    var obj2 = {};
    obj["slot"] = victim;
    obj2.forward = victim;
    return obj2.forward;
}
assign_as_rexp_1();
function assign_as_rexp_2() {
    var obj = {};
    var victim = "PASS";
    function f24(a25) {
        victim = "FAIL";
    }
    obj.__defineSetter__("slot", f24);
    var obj2 = {};
    obj.slot = victim;
    obj2.forward = victim;
    return obj2.forward;
}
assign_as_rexp_2();
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
// #FailureMessage Object: 0x7fef8a7fa700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55fb902e3a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55fb902e22a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55fb902d6546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55fb902d5d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55fb91def13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55fb921ba7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55fb91d4c3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55fb91cfa150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55fb91cf6fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55fb91a4d5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55fb91a447e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55fb904c2cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55fb91a47588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55fb902e714f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55fb902f2925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55fb902df650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fefb4d7fac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fefb4e11850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 102ms
