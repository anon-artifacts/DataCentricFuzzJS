function foo(a1) {
    return typeof a1?.f;
}
function bar(a5, a6) {
    a5.f = a6;
}
try { noInline(foo); } catch (e) {}
try { noInline(bar); } catch (e) {}
var o = {};
for (let i13 = 0; i13 < 5; ++i13) {
    let v21;
    try { v21 = Symbol("Cocoa"); } catch (e) {}
    try { bar(o, v21); } catch (e) {}
}
for (let i24 = 0; i24 < 10000; ++i24) {
    let v30;
    try { v30 = foo(o); } catch (e) {}
    var result = v30;
    if (result != "symbol") {
        throw "Error: bad result: " + result;
    }
}
function f36() {
    return "hello";
}
const v38 = { toString: f36 };
try { bar(o, v38); } catch (e) {}
let v40;
try { v40 = foo(o); } catch (e) {}
var result = v40;
if (result != "object") {
    throw "Error: bad result at end: " + result;
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
// #FailureMessage Object: 0x7fad0d7f8700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55bf7dc6fa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55bf7dc6e2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55bf7dc62546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55bf7dc61d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55bf7f77b13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55bf7fb467a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55bf7f6d83eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55bf7f686150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55bf7f682fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55bf7f3d95d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55bf7f3d07e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55bf7de4ecb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55bf7f3d3588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55bf7dc7314f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55bf7dc7e925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55bf7dc6b650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fad21cfcac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fad21d8e850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 130ms
