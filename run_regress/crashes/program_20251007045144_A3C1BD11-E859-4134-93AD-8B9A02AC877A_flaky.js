function f() {
    var sum = 0;
    for (let i4 = 99; i4 < 100; i4++) {
        for (let i11 = 5; i11 < 6; i11++) {
            for (let i18 = 0; i18 < 1000; i18++) {
                var x = i11 + 2;
                var y = x + 5;
                var z = y + 3;
                sum += z;
            }
            if (true) {
                break;
            }
        }
        if (true) {
            break;
        }
    }
    return sum;
}
f();
f();
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
// #FailureMessage Object: 0x7ff053352700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55ef4bc1aa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55ef4bc192a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55ef4bc0d546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55ef4bc0cd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55ef4d72613e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55ef4daf17a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55ef4d6833eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55ef4d631150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55ef4d62dfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55ef4d3845d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55ef4d37b7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55ef4bdf9cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55ef4d37e588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55ef4bc1e14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55ef4bc29925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55ef4bc16650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7ff061713ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7ff0617a5850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 165ms
