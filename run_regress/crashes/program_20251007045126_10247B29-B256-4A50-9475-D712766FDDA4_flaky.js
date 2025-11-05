console.log("Test to ensure correct behaviour when using backreferences in a RegExp");
/(...)\1$/.test("abcabc");
/(...)\1$/.test("abcdef");
/(...)\2$/.test("abcabc");
/(...)\2$/.test("abc");
/\1(...)$/.test("abcabc");
/\1(...)$/.test("abcdef");
/\2(...)$/.test("abcabc");
/\2(...)$/.test("abc");
/\1?(...)$/.test("abc");
/\1?(...)$/.test("abc");
const v36 = new RegExp("[^b]*((..)|(\2))+Sz", "i");
re = v36;
re.test("axabcd");
re.test("axabcsz");
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
// #FailureMessage Object: 0x7f3bd40e3700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x562bd0990a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x562bd098f2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x562bd0983546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x562bd0982d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x562bd249c13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x562bd28677a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x562bd23f93eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x562bd23a7150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x562bd23a3fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x562bd20fa5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x562bd20f17e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x562bd0b6fcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x562bd20f4588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x562bd099414f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x562bd099f925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x562bd098c650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f3bdcc99ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f3bdcd2b850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 125ms
