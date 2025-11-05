let v1;
try { v1 = newGlobal(); } catch (e) {}
var g = v1;
let v4;
try { v4 = g.eval("() => {}"); } catch (e) {}
var w = v4;
let v7;
try { v7 = g.eval("Array"); } catch (e) {}
var v = v7;
function f() {
    try {
        const v10 = {};
        try { Reflect.construct(v, v10, w); } catch (e) {}
    } catch(e13) {
        e13 instanceof TypeError;
    }
}
try { f(); } catch (e) {}
try { f(); } catch (e) {}
try { f(); } catch (e) {}
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
// #FailureMessage Object: 0x7fe1c8c2e700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x563dccb5ba82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x563dccb5a2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x563dccb4e546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x563dccb4dd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x563dce66713e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x563dcea327a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x563dce5c43eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x563dce572150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x563dce56efd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x563dce2c55d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x563dce2bc7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x563dccd3acb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x563dce2bf588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x563dccb5f14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x563dccb6a925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x563dccb57650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fe1d27e6ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fe1d2878850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 155ms
