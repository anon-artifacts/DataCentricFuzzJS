function enumerate(a1) {
    var keys = [];
    for (const v4 in a1) {
        keys.push(v4);
    }
    return keys;
}
function testSlowSloppyArgumentsElements() {
    function slowSloppyArguments(a8, a9, a10) {
        arguments[10000] = "last";
        arguments[4000] = "first";
        arguments[6000] = "second";
        arguments[5999] = "x";
        arguments[3999] = "y";
        return arguments;
    }
    ["0","1","2","3999","4000","5999","6000","10000"];
    Object.keys(slowSloppyArguments(1, 2, 3));
    ["0","1","2","3999","4000","5999","6000","10000"];
    enumerate(slowSloppyArguments(1, 2, 3));
}
testSlowSloppyArgumentsElements();
function testSlowSloppyArgumentsElementsNotEnumerable() {
    function slowSloppyArguments(a54, a55, a56) {
        Object.defineProperty(arguments, 10000, { enumerable: false, configurable: false, value: "NOPE" });
        arguments[4000] = "first";
        arguments[6000] = "second";
        arguments[5999] = "x";
        arguments[3999] = "y";
        return arguments;
    }
    ["0","1","2","3999","4000","5999","6000"];
    Object.keys(slowSloppyArguments(1, 2, 3));
    ["0","1","2","3999","4000","5999","6000"];
    enumerate(slowSloppyArguments(1, 2, 3));
}
testSlowSloppyArgumentsElementsNotEnumerable();
function testFastSloppyArgumentsElements() {
    function fastSloppyArguments(a104, a105, a106) {
        arguments[5] = 1;
        arguments[7] = 0;
        arguments[3] = 2;
        return arguments;
    }
    ["0","1","2","3","5","7"];
    Object.keys(fastSloppyArguments(1, 2, 3));
    ["0","1","2","3","5","7"];
    enumerate(fastSloppyArguments(1, 2, 3));
    function fastSloppyArguments2(a140, a141, a142) {
        delete arguments[0];
        arguments[0] = "test";
        return arguments;
    }
    ["0","1","2"];
    Object.keys(fastSloppyArguments2(1, 2, 3));
    ["0","1","2"];
    enumerate(fastSloppyArguments2(1, 2, 3));
}
testFastSloppyArgumentsElements();
function testFastSloppyArgumentsElementsNotEnumerable() {
    function fastSloppyArguments(a170, a171, a172) {
        Object.defineProperty(arguments, 5, { enumerable: false, configurable: false, value: "NOPE" });
        arguments[7] = 0;
        arguments[3] = 2;
        return arguments;
    }
    ["0","1","2","3","7"];
    Object.keys(fastSloppyArguments(1, 2, 3));
    ["0","1","2","3","7"];
    enumerate(fastSloppyArguments(1, 2, 3));
    function fastSloppyArguments2(a210, a211, a212) {
        delete arguments[0];
        Object.defineProperty(arguments, 1, { enumerable: false, configurable: false, value: "NOPE" });
        arguments[0] = "test";
        return arguments;
    }
    ["0","2"];
    Object.keys(fastSloppyArguments2(1, 2, 3));
    ["0","2"];
    enumerate(fastSloppyArguments2(1, 2, 3));
}
testFastSloppyArgumentsElementsNotEnumerable();
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
// #FailureMessage Object: 0x7f353e6a3700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x560b0bc16a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x560b0bc152a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x560b0bc09546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x560b0bc08d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x560b0d72213e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x560b0daed7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x560b0d67f3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x560b0d62d150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x560b0d629fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x560b0d3805d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x560b0d3777e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x560b0bdf5cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x560b0d37a588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x560b0bc1a14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x560b0bc25925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x560b0bc12650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f354a25fac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f354a2f1850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 145ms
