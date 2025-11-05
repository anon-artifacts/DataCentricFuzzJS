function f0() {
}
var gTestfile = "element-setting-ToNumber-detaches.js";
var BUGNUMBER = 1001547;
var summary = "Don't assert assigning into memory detached while converting the value to " + "assign into a number";
const v11 = (BUGNUMBER + ": ") + summary;
try { f0(v11); } catch (e) {}
let v15;
try { v15 = new ArrayBuffer(64); } catch (e) {}
var ab = v15;
let v18;
try { v18 = new Uint32Array(ab); } catch (e) {}
var ta = v18;
const v24 = {
    valueOf() {
        try { detachArrayBuffer(ab); } catch (e) {}
        return 5;
    },
};
ta[4] = v24;
if (typeof f0 === "function") {
    try { f0(true, true); } catch (e) {}
}
try { f0("Tests complete"); } catch (e) {}
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
// #FailureMessage Object: 0x7fea7e5e9700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55db6ebffa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55db6ebfe2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55db6ebf2546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55db6ebf1d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55db7070b13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55db70ad67a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55db706683eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55db70616150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55db70612fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55db703695d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55db703607e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55db6eddecb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55db70363588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55db6ec0314f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55db6ec0e925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55db6ebfb650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fea8b9a8ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fea8ba3a850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 187ms
