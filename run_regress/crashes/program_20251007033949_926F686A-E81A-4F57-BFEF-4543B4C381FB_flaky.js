function TestCase(a1, a2, a3, a4) {
    function writeHeaderToLog(a6) {
    }
    return writeHeaderToLog;
}
var SECTION = "11.7.2";
for (power = 0; power <= 32; power++) {
    shiftexp = Math.pow(2, power);
    for (addexp = 0; addexp <= 32; addexp++) {
        new TestCase(SECTION, SignedRightShift(shiftexp, addexp), shiftexp >> addexp);
    }
}
function ToInt32BitString(a35) {
    var b = "";
    return b;
}
function SignedRightShift(a39, a40) {
    a39 = ToInt32BitString(a39);
    a39 = a39.substring(0, (1 | Math) && (4294967295 + 2));
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
// #FailureMessage Object: 0x7f6293ffd700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55afb0796a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55afb07952a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55afb0789546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55afb0788d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55afb22a213e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55afb266d7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55afb21ff3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55afb21ad150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55afb21a9fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55afb1f005d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55afb1ef77e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55afb0975cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55afb1efa588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55afb079a14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55afb07a5925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55afb0792650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f62b72acac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f62b733e850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 123ms
