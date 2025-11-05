function f0() {
    function foo(a2) {
        a2 = a2 >>> 0;
        var y = 0 - 2147483648;
        return a2 + y;
    }
    -2147483648;
    foo(0);
    foo(2147483648);
    foo(4294967295);
    -2147483648;
    foo(0);
    foo(2147483648);
    foo(4294967295);
    -2147483648;
    foo(0);
    foo(2147483648);
    foo(4294967295);
    foo();
}
f0();
function f42() {
    function foo(a44) {
        a44 = a44 >>> 0;
        var y = 2147483648;
        return a44 - y;
    }
    -2147483648;
    foo(0);
    foo(2147483648);
    foo(4294967295);
    -2147483648;
    foo(0);
    foo(2147483648);
    foo(4294967295);
    -2147483648;
    foo(0);
    foo(2147483648);
    foo(4294967295);
    foo();
}
f42();
function f82() {
    function foo(a84) {
        a84 = a84 | 0;
        var y = 2147483648;
        return a84 + y;
    }
    foo(0);
    foo(-2147483648);
    foo(2147483647);
    foo(0);
    foo(-2147483648);
    foo(2147483647);
    foo(0);
    foo(-2147483648);
    foo(2147483647);
    foo();
}
f82();
function f122() {
    function foo(a124) {
        a124 = a124 | 0;
        var y = 0 - 2147483648;
        return a124 - y;
    }
    foo(0);
    foo(-2147483648);
    foo(2147483647);
    foo(0);
    foo(-2147483648);
    foo(2147483647);
    foo(0);
    foo(-2147483648);
    foo(2147483647);
    foo();
}
f122();
function f164() {
    function foo(a166) {
        a166 = a166 | 0;
        var y = -0;
        return a166 + y;
    }
    foo(2147483647);
    -2147483648;
    foo(-2147483648);
    foo(0);
    foo(2147483647);
    -2147483648;
    foo(-2147483648);
    foo(0);
    foo(2147483647);
    -2147483648;
    foo(-2147483648);
    foo(0);
    foo();
}
f164();
function f208() {
    function foo(a210) {
        var y = a210 < 0 ? 4294967295 : 4294967296;
        var z = a210 > 0 ? 2147483647 : 2147483648;
        return y - z;
    }
    foo(-1);
    foo(0);
    foo(1);
    foo(-1);
    foo(0);
    foo(1);
    foo(-1);
    foo(0);
    foo(1);
    foo();
}
f208();
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
// #FailureMessage Object: 0x7f547d7f8700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x56152faa7a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x56152faa62a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x56152fa9a546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x56152fa99d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5615315b313e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x56153197e7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5615315103eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5615314be150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5615314bafd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5615312115d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5615312087e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x56152fc86cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x56153120b588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x56152faab14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x56152fab6925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x56152faa3650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f548a37eac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f548a410850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 149ms
