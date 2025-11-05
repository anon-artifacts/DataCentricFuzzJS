function assert(a1) {
}
function foo(a3) {
    let o;
    if (a3) {
        o = {};
    } else {
        function f7() {
        }
        o = f7;
    }
    return typeof o;
}
try { noInline(foo); } catch (e) {}
for (let i12 = 0; i12 < 10000; i12++) {
    let bool = !(!(i12 % 2));
    let v23;
    try { v23 = foo(bool); } catch (e) {}
    let result = v23;
    if (bool) {
        result === "object";
    } else {
        result === "function";
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
// #FailureMessage Object: 0x7fb549477700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x563e3ac5ca82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x563e3ac5b2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x563e3ac4f546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x563e3ac4ed95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x563e3c76813e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x563e3cb337a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x563e3c6c53eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x563e3c673150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x563e3c66ffd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x563e3c3c65d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x563e3c3bd7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x563e3ae3bcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x563e3c3c0588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x563e3ac6014f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x563e3ac6b925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x563e3ac58650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fb556846ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fb5568d8850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 164ms
