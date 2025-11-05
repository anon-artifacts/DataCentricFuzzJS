function foo(a1) {
    let v3;
    try { v3 = new Array(a1); } catch (e) {}
    return v3;
}
try { noInline(foo); } catch (e) {}
var poke;
function f9() {
    poke = "poke";
}
const v12 = Array?.prototype;
try { v12.__defineSetter__("1", f9); } catch (e) {}
function test(a15) {
    let v16;
    try { v16 = foo(a15); } catch (e) {}
    var result = v16;
    if (result?.length != a15) {
        throw "Error: bad result: " + result;
    }
    var sawThings = false;
    for (const v24 in result) {
        if (v24 != "1") {
            sawThings = true;
        }
    }
    if (sawThings) {
        throw "Error: array is in bad state: " + result;
    }
    result[0] = "42.5";
    if (result?.[0] != "42.5") {
        throw "Error: array is in wierd state: " + result;
    }
    poke = null;
    result[1] = 42;
    if (poke != "poke") {
        throw "Error: setter not called.";
    }
}
for (let i42 = 0; i42 < 100000; ++i42) {
    try { test(42); } catch (e) {}
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
// #FailureMessage Object: 0x7f933700c700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x562a374d0a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x562a374cf2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x562a374c3546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x562a374c2d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x562a38fdc13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x562a393a77a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x562a38f393eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x562a38ee7150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x562a38ee3fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x562a38c3a5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x562a38c317e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x562a376afcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x562a38c34588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x562a374d414f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x562a374df925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x562a374cc650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f93423c7ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f9342459850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 227ms
