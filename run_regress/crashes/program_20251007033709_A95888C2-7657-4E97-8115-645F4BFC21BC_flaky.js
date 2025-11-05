function f1() {
    new RegExp();
    return RegExp;
}
let v5 = "0";
v5 += " ";
BigInt("0b1111");
BigInt("0B1111");
BigInt("0o20");
BigInt("   0O20");
BigInt("0xa");
BigInt(3245);
function f20() {
    return "0B1111";
}
const v21 = { a: f20, a: f20 };
const v23 = Array.prototype;
Object.defineProperty(v23, 1, {});
[[-1.0,Date]];
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
// #FailureMessage Object: 0x7f56a1f9d700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x56072bdd8a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x56072bdd72a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x56072bdcb546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x56072bdcad95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x56072d8e413e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x56072dcaf7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x56072d8413eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x56072d7ef150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x56072d7ebfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x56072d5425d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x56072d5397e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x56072bfb7cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x56072d53c588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x56072bddc14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x56072bde7925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x56072bdd4650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f56b1370ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f56b1402850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 131ms
