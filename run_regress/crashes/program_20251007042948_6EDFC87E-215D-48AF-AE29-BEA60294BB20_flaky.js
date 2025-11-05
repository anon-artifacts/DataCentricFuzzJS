function f0() {
    var result = 0;
    var m = 100;
    var n = 100000;
    var array = [];
    for (let i10 = 0; i10 < 100; ++i10) {
        array.push(12);
    }
    for (let i19 = 0; i19 < m; ++i19) {
        var value = 0;
        function f26() {
            return 42;
        }
        var o = { valueOf: f26 };
        value -= o;
        var result = 0;
        for (let i33 = 0; i33 < n; ++i33) {
            result += array[-value];
        }
    }
    if (result != (n * 12)) {
        throw "Error: bad result: " + result;
    }
}
f0();
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
// #FailureMessage Object: 0x7fd846c73700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55af50e19a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55af50e182a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55af50e0c546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55af50e0bd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55af5292513e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55af52cf07a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55af528823eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55af52830150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55af5282cfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55af525835d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55af5257a7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55af50ff8cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55af5257d588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55af50e1d14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55af50e28925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55af50e15650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fd85282fac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fd8528c1850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 135ms
