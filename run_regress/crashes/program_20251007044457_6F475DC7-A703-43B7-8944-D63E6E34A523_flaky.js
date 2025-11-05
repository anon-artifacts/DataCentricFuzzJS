var BUGNUMBER = 336409;
var summary = "Integer overflow in js_obj_toSource";
var actual = "No Crash";
var expect = /(No Crash|InternalError: allocation size overflow|out of memory)/;
printBugNumber(BUGNUMBER);
printStatus(summary);
expectExitCode(0);
expectExitCode(5);
function createString(a18) {
    var l = (a18 * 1024) * 1024;
    var r = "r";
    while (r.length < l) {
        r = r + r;
    }
    return r;
}
try {
    var n = 128;
    printStatus(("Creating " + n) + "MB string");
    var r = createString(n);
    printStatus("Done. length = " + r.length);
    printStatus("Creating object");
    const v44 = {
        f1: r,
        f2: r,
        f3: r,
        f4: r,
        f5: r,
        f6: r,
        f7: r,
        f8: r,
        f9: r,
    };
    var o = v44;
    printStatus("object.toSource()");
    var rr = o.toSource();
    printStatus("Done.");
} catch(e52) {
    print(actual = e52 + "");
}
reportMatch(expect, actual, summary);
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
// #FailureMessage Object: 0x7f18b702b700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x558fe7899a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x558fe78982a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x558fe788c546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x558fe788bd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x558fe93a513e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x558fe97707a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x558fe93023eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x558fe92b0150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x558fe92acfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x558fe90035d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x558fe8ffa7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x558fe7a78cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x558fe8ffd588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x558fe789d14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x558fe78a8925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x558fe7895650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f18c23e6ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f18c2478850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 119ms
