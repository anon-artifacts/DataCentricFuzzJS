try { console.log("Tests that if you alias the arguments in a very small function, arguments simplification still works."); } catch (e) {}
function foo() {
    var args = arguments;
    return args?.[0] + args?.[1];
}
silentTestPass = true;
try { noInline(foo); } catch (e) {}
for (let i14 = 0; i14 < 400; i14++) {
    const v21 = i14 + 1;
    try { foo(i14, v21); } catch (e) {}
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
// #FailureMessage Object: 0x7f5a90d93700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5566705f8a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5566705f72a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5566705eb546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5566705ead95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55667210413e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5566724cf7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5566720613eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55667200f150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55667200bfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x556671d625d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x556671d597e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5566707d7cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x556671d5c588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5566705fc14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x556670607925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5566705f4650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f5a9f154ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f5a9f1e6850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 116ms
