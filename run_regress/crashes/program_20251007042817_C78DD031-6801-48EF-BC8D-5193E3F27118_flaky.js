var obj3 = { b: 1 };
function f3() {
    var obj7 = obj3;
    var obj8 = obj7;
    var sum = 0;
    for (let i9 = 0; i9 < 2; i9++) {
        sum += obj7.b;
        sum += obj8.b;
        obj8.b = 3;
        sum += obj7.b;
    }
    print(sum);
}
f3();
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
// #FailureMessage Object: 0x7f21bea34700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x561e97c9ba82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x561e97c9a2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x561e97c8e546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x561e97c8dd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x561e997a713e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x561e99b727a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x561e997043eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x561e996b2150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x561e996aefd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x561e994055d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x561e993fc7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x561e97e7acb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x561e993ff588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x561e97c9f14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x561e97caa925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x561e97c97650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f21cde17ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f21cdea9850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 132ms
