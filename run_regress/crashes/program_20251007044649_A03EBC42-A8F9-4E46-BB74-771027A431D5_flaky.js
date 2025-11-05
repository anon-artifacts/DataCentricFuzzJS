var o1 = { x: 1 };
var o2 = {};
var deopt_getter = false;
var deopt_setter = false;
function f_mono(a10) {
    let v12 = a10.x;
    return 5 + v12++;
}
var to_deopt = f_mono;
var v = 1;
var g = 0;
var s = 0;
function f23() {
    g++;
    if (deopt_getter) {
        deopt_getter = false;
    }
    return v;
}
function f26(a27) {
    v = a27;
    s++;
    if (deopt_setter) {
        deopt_setter = false;
    }
}
Object.defineProperty(o2, "x", { get: f23, set: f26 });
f_mono(o2);
f_mono(o2);
deopt_setter = true;
f_mono(o2);
function f_poly(a47) {
    let v49 = a47.x;
    return 5 + v49++;
}
v = 1;
to_deopt = f_poly;
f_poly(o1);
f_poly(o1);
f_poly(o2);
f_poly(o2);
deopt_setter = true;
f_poly(o2);
v = undefined;
f_poly(o2);
function f_pre(a74) {
    let v76 = a74.x;
    return 5 + ++v76;
}
v = 1;
to_deopt = f_pre;
f_pre(o1);
f_pre(o1);
f_pre(o2);
f_pre(o2);
deopt_setter = true;
f_pre(o2);
v = undefined;
f_pre(o2);
function f_get(a100) {
    let v102 = a100.x;
    return 5 + v102++;
}
v = 1;
to_deopt = f_get;
f_get(o1);
f_get(o1);
f_get(o2);
f_get(o2);
deopt_getter = true;
f_get(o2);
v = undefined;
f_get(o2);
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
// #FailureMessage Object: 0x7f0c137f4700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x56355d974a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x56355d9732a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x56355d967546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x56355d966d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x56355f48013e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x56355f84b7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x56355f3dd3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x56355f38b150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x56355f387fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x56355f0de5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x56355f0d57e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x56355db53cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x56355f0d8588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x56355d97814f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x56355d983925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x56355d970650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f0c280e1ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f0c28173850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 115ms
