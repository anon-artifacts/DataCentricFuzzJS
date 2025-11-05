var gTestfile = "DataView-set-arguments-detaching.js";
var BUGNUMBER = 991981;
var summary = "DataView.prototype.set* methods shouldn't misbehave horribly if " + "index-argument conversion detaches the ArrayBuffer being modified";
print((BUGNUMBER + ": ") + summary);
function testIndex() {
    const v16 = new ArrayBuffer(4096);
    var ab = v16;
    const v19 = new DataView(ab);
    var dv = v19;
    function f21() {
        detachArrayBuffer(ab);
        gc();
        return 4095;
    }
    var start = { valueOf: f21 };
    var ok = false;
    try {
        dv.setUint8(start, 66);
    } catch(e33) {
        ok = true;
    }
    ab.byteLength;
}
testIndex();
function testValue() {
    const v44 = new ArrayBuffer(1048576);
    var ab = v44;
    const v47 = new DataView(ab);
    var dv = v47;
    function f49() {
        detachArrayBuffer(ab);
        gc();
        return 66;
    }
    var value = { valueOf: f49 };
    var ok = false;
    try {
        dv.setUint8(1048575, value);
    } catch(e61) {
        ok = true;
    }
    ab.byteLength;
}
testValue();
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
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
// #FailureMessage Object: 0x7f948ef35700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55e50e9fda82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55e50e9fc2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55e50e9f0546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55e50e9efd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55e51050913e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55e5108d47a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55e5104663eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55e510414150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55e510410fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55e5101675d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55e51015e7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55e50ebdccb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55e510161588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55e50ea0114f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55e50ea0c925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55e50e9f9650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f949b2f2ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f949b384850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 118ms
