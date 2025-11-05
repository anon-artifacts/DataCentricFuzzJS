function f0() {
}
var BUGNUMBER = 367118;
var summary = "memory corruption in script_compile";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    if (typeof Script == "undefined") {
        f0("Test skipped. Script or toSource not defined");
    } else {
        const v21 = new Script("");
        var s = v21;
        function f23() {
            s.compile("");
            f0(1);
            return "a";
        }
        var o = { toString: f23 };
        s.compile(o);
    }
    f0(expect, actual, summary);
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
// #FailureMessage Object: 0x7f71e1ff9700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5635fdde9a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5635fdde82a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5635fdddc546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5635fdddbd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5635ff8f513e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5635ffcc07a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5635ff8523eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5635ff800150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5635ff7fcfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5635ff5535d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5635ff54a7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5635fdfc8cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5635ff54d588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5635fdded14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5635fddf8925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5635fdde5650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f7204ef2ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f7204f84850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 212ms
