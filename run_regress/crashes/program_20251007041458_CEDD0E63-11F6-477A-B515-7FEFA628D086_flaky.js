function f0() {
    'use asm';
    const v3 = new Uint8Array(2);
    var a = v3;
    a[0] = 128;
    a[1] = 127;
    function foo() {
        var x = a[0] | 0;
        var y = a[1] | 0;
        if (x < 0) {
            x = (4294967296 + x) | 0;
        }
        if (y < 0) {
            y = (4294967296 + y) | 0;
        }
        return x >= y;
    }
    return foo;
}
var foo = f0();
foo();
foo();
foo();
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
// #FailureMessage Object: 0x7f6f5d90b700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x563d6f5dba82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x563d6f5da2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x563d6f5ce546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x563d6f5cdd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x563d710e713e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x563d714b27a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x563d710443eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x563d70ff2150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x563d70feefd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x563d70d455d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x563d70d3c7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x563d6f7bacb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x563d70d3f588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x563d6f5df14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x563d6f5ea925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x563d6f5d7650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f6f6accaac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f6f6ad5c850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 137ms
