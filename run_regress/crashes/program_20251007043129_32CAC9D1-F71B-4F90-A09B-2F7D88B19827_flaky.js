var a = [];
for (let i3 = 0; i3 < 2000; i3++) {
    a.push({ f: i3 });
}
function f() {
    var total = 0;
    for (let i15 = 0; i15 < a.length; i15++) {
        total += a[i15].f;
    }
    return total;
}
f();
var sub = Object.create(a[0]);
f();
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
// #FailureMessage Object: 0x7f2918635700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x561412a94a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x561412a932a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x561412a87546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x561412a86d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5614145a013e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x56141496b7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5614144fd3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5614144ab150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5614144a7fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5614141fe5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5614141f57e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x561412c73cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5614141f8588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x561412a9814f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x561412aa3925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x561412a90650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f29279f8ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f2927a8a850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 163ms
