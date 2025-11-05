function foo(a1, a2) {
    return a1 << a2;
}
try { noInline(foo); } catch (e) {}
function f9() {
    return 4;
}
var things = [1,2.5,"3",{ valueOf: f9 }];
var results = [2,4,6,8];
for (let i21 = 0; i21 < 100000; ++i21) {
    const v29 = things?.[i21 % things?.length];
    let v31;
    try { v31 = foo(v29, 1); } catch (e) {}
    var result = v31;
    var expected = results?.[i21 % results?.length];
    if (result != expected) {
        throw (("Error: bad result for i = " + i21) + ": ") + result;
    }
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
// #FailureMessage Object: 0x7fc8770ac700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x559fbf395a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x559fbf3942a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x559fbf388546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x559fbf387d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x559fc0ea113e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x559fc126c7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x559fc0dfe3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x559fc0dac150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x559fc0da8fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x559fc0aff5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x559fc0af67e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x559fbf574cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x559fc0af9588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x559fbf39914f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x559fbf3a4925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x559fbf391650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fc880c64ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fc880cf6850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 139ms
