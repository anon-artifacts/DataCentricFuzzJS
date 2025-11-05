function f0() {
}
var UBound = 0;
var BUGNUMBER = 222029;
var summary = "Make our f.caller property match IE's wrt f.apply and f.call";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
var p = "global";
var o = { p: "object" };
function f(a25) {
    return f?.caller?.p;
}
function g(a29) {
    var p = "local";
    let v32;
    try { v32 = f(a29); } catch (e) {}
    return v32;
}
g.p = "hello";
function gg(a35) {
    var p = "local";
    let v38;
    try { v38 = f.call(a35, a35); } catch (e) {}
    return v38;
}
gg.p = "hello";
function ggg(a41) {
    var p = "local";
    const v44 = [a41];
    let v45;
    try { v45 = f.apply(a41, v44); } catch (e) {}
    return v45;
}
ggg.p = "hello";
const t38 = Function?.prototype?.call;
t38.p = "goodbye";
const t40 = Function?.prototype?.apply;
t40.p = "goodbye";
let v56;
try { v56 = inSection(1); } catch (e) {}
status = v56;
let v57;
try { v57 = g(o); } catch (e) {}
actual = v57;
expect = "hello";
try { addThis(); } catch (e) {}
let v62;
try { v62 = inSection(2); } catch (e) {}
status = v62;
let v63;
try { v63 = gg(o); } catch (e) {}
actual = v63;
expect = "hello";
try { addThis(); } catch (e) {}
let v67;
try { v67 = inSection(3); } catch (e) {}
status = v67;
let v68;
try { v68 = ggg(o); } catch (e) {}
actual = v68;
expect = "hello";
try { addThis(); } catch (e) {}
try { test(); } catch (e) {}
function addThis() {
    statusitems[UBound] = status;
    actualvalues[UBound] = actual;
    expectedvalues[UBound] = expect;
    UBound++;
}
function test() {
    try { f0(BUGNUMBER); } catch (e) {}
    try { f0(summary); } catch (e) {}
    for (let i79 = 0; i79 < UBound; i79++) {
        const v84 = expectedvalues?.[i79];
        const v85 = actualvalues?.[i79];
        const v86 = statusitems?.[i79];
        try { f0(v84, v85, v86); } catch (e) {}
    }
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
// #FailureMessage Object: 0x7f565efeb700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x565514b6da82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x565514b6c2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x565514b60546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x565514b5fd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x56551667913e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x565516a447a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5655165d63eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x565516584150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x565516580fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5655162d75d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5655162ce7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x565514d4ccb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5655162d1588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x565514b7114f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x565514b7c925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x565514b69650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f56710c7ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f5671159850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 179ms
