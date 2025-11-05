const maxLength = 4294967295;
let v3;
try { v3 = ("A").repeat(maxLength); } catch (e) {}
const s = v3;
function foo(a6) {
    let v8;
    try { v8 = a6.lastIndexOf("", maxLength); } catch (e) {}
    let x = v8;
    return x === maxLength;
}
foo(s);
foo(s);
foo(s);
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
// #FailureMessage Object: 0x7f00d5890700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x565251f1aa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x565251f192a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x565251f0d546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x565251f0cd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x565253a2613e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x565253df17a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5652539833eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x565253931150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x56525392dfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5652536845d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x56525367b7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5652520f9cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x56525367e588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x565251f1e14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x565251f29925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x565251f16650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f00e044aac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f00e04dc850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 186ms
