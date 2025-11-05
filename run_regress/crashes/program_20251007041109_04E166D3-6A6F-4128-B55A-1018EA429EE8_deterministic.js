function foo(a1) {
    var o = a1;
    var result = 0;
    for (const v5 in o) {
        if ((result += o?.[v5]) >= 3) {
            o = { 0: 1, 1: 2, b: 4, a: 3 };
        }
    }
    return result;
}
try { noInline(foo); } catch (e) {}
for (let i17 = 0; i17 < 10000; ++i17) {
    const v27 = { 0: 0, 1: 1, a: 2, b: 3 };
    let v28;
    try { v28 = foo(v27); } catch (e) {}
    var result = v28;
    if (result != 7) {
        throw "Error: bad result: " + result;
    }
}
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// [COV] edge counters initialized. Shared memory: shm_id_1162266_0 with 1587369 edges
// V8 is running with experimental features enabled. Stability and security will suffer.
// 
// 
// #
// # Fatal error in ../../src/maglev/maglev-assembler-inl.h, line 777
// # Debug check failed: !allow_allocate() implies builtin == Builtin::kDoubleToI || !BuiltinCanAllocate(builtin).
// #
// #
// #
// #FailureMessage Object: 0x7fcc4a101700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55a2a276ca82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55a2a276b2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55a2a275f546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55a2a275ed95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55a2a427813e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55a2a46437a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55a2a41d53eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55a2a4183150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55a2a417ffd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55a2a3ed65d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55a2a3ecd7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55a2a294bcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55a2a3ed0588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55a2a277014f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55a2a277b925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55a2a2768650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fcc53cb9ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fcc53d4b850]
// Received signal 6
// STDOUT:
// Warning: unknown flag --experimental-wasm-memory64.
// Try --help for options
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 275ms
