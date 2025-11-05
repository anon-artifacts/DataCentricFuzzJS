actual = "";
expected = "4,4,4,";
function k(a5) {
    for (let i7 = 0; i7 < 5; ++i7) {
        a5(i7);
    }
}
function t() {
    var x = 1;
    function f17(a18) {
        x = a18;
    }
    k(f17);
    try { appendToActual(x); } catch (e) {}
}
try { t(); } catch (e) {}
try { t(); } catch (e) {}
try { t(); } catch (e) {}
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
// #FailureMessage Object: 0x7f1c7dbd6700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x56177684ca82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x56177684b2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x56177683f546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x56177683ed95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x56177835813e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5617787237a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5617782b53eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x561778263150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x56177825ffd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x561777fb65d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x561777fad7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x561776a2bcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x561777fb0588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x56177685014f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x56177685b925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x561776848650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f1c88f91ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f1c89023850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 116ms
