function test(a1) {
    return Array(a1);
}
function test2() {
    return test(2);
}
function test3(a8) {
    a8[0] = 1;
}
test(0);
var smi_array = [1,2];
smi_array[2] = 3;
test3(smi_array);
var broken_array = test2();
test3(broken_array);
1 + broken_array[0];
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
// #FailureMessage Object: 0x7f23698d1700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55b6edc87a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55b6edc862a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55b6edc7a546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55b6edc79d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55b6ef79313e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55b6efb5e7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55b6ef6f03eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55b6ef69e150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55b6ef69afd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55b6ef3f15d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55b6ef3e87e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55b6ede66cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55b6ef3eb588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55b6edc8b14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55b6edc96925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55b6edc83650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f2372487ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f2372519850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 208ms
