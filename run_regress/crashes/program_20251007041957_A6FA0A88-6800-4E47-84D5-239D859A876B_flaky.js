function f0() {
}
var BUGNUMBER = 451946;
var summary = "Do not crash with SELinux execheap protection";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    f0("This test is only valid with SELinux targetted policy with exeheap protection");
    var i;
    for ((() => {
            i = 0;
        })();
        i < 2000000;
        i++) {
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
// #FailureMessage Object: 0x7efd006e7700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55982866ea82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55982866d2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x559828661546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x559828660d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55982a17a13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55982a5457a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55982a0d73eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55982a085150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55982a081fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x559829dd85d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x559829dcf7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55982884dcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x559829dd2588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55982867214f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55982867d925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55982866a650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7efd0f2a9ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7efd0f33b850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 138ms
