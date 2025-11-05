function Module(a1, a2, a3) {
    'use asm';
    function f0(a5) {
        return (((a5 = a5 | 0) | 0) % 2) | 0;
    }
    function f1(a15) {
        return (((a15 = a15 | 0) | 0) % 3) | 0;
    }
    function f2(a25) {
        return (((a25 = a25 | 0) | 0) % 9) | 0;
    }
    function f3(a35) {
        return (((a35 = a35 | 0) | 0) % 1024) | 0;
    }
    function f4(a45) {
        return (((a45 = a45 | 0) | 0) % 3333339) | 0;
    }
    const v54 = {
        f0: f0,
        f1: f1,
        f2: f2,
        f3: f3,
        f4: f4,
    };
    return v54;
}
const v56 = {};
const v59 = new ArrayBuffer(1024);
var m = Module(this, v56, v59);
for (let i64 = -2147483648; i64 < 2147483648; i64 += 3999773) {
    (i64 % 2) | 0;
    m.f0(i64);
    (i64 % 3) | 0;
    m.f1(i64);
    (i64 % 9) | 0;
    m.f2(i64);
    (i64 % 1024) | 0;
    m.f3(i64);
    (i64 % 3333339) | 0;
    m.f4(i64);
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
// #FailureMessage Object: 0x7f291fbea700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x560f203dba82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x560f203da2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x560f203ce546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x560f203cdd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x560f21ee713e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x560f222b27a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x560f21e443eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x560f21df2150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x560f21deefd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x560f21b455d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x560f21b3c7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x560f205bacb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x560f21b3f588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x560f203df14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x560f203ea925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x560f203d7650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f29297a2ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f2929834850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 227ms
