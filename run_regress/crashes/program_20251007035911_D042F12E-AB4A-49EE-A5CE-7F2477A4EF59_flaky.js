function test0() {
    var obj0 = {};
    var arrObj0 = {};
    function f5() {
    }
    var func0 = f5;
    function f7() {
        const v9 = -46;
        const v12 = -2147483648;
        const v14 = -6026250548246089728;
        const v15 = {
            prop0: v9,
            prop1: 3,
            prop2: v12,
            length: v14,
            method0: func0,
        };
        const v16 = { lf0: v15 };
        const v17 = { nd0: v16 };
        var obj4 = { nd0: v17 };
        d ^= obj4.nd0.nd0.lf0.method0();
        const t20 = obj4.nd0.nd0;
        t20.lf0 = 1;
        this.prop1 |= obj4.nd0.nd0.lf0.method0.call(obj0);
    }
    var func1 = f7;
    const t26 = Object.prototype;
    t26.method0 = func1;
    var d = 1;
    arrObj0.method0();
}
var testOutcome = false;
try {
    test0();
    test0();
    test0();
    runningJITtedCode = true;
    test0();
    test0();
    test0();
} catch(e50) {
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
// #FailureMessage Object: 0x7f7cf90ec700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5600d83a5a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5600d83a42a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5600d8398546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5600d8397d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5600d9eb113e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5600da27c7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5600d9e0e3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5600d9dbc150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5600d9db8fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5600d9b0f5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5600d9b067e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5600d8584cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5600d9b09588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5600d83a914f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5600d83b4925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5600d83a1650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f7d04ca8ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f7d04d3a850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 133ms
