const v1 = {};
function f2() {
    return undefined;
}
function f4() {
    return true;
}
const v6 = { getOwnPropertyDescriptor: f2, has: f4 };
let v7;
try { v7 = new Proxy(v1, v6); } catch (e) {}
var prox = v7;
let v11;
try { v11 = newGlobal(); } catch (e) {}
const v12 = v11?.__lookupSetter__;
try { v12.call(prox, "e"); } catch (e) {}
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
// #FailureMessage Object: 0x7f1139ff9700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55c7e33e5a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55c7e33e42a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55c7e33d8546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55c7e33d7d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55c7e4ef113e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55c7e52bc7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55c7e4e4e3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55c7e4dfc150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55c7e4df8fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55c7e4b4f5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55c7e4b467e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55c7e35c4cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55c7e4b49588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55c7e33e914f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55c7e33f4925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55c7e33e1650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f114c1c0ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f114c252850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 167ms
