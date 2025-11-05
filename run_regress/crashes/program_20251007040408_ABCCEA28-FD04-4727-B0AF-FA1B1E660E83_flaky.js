var script = "recursionCount, ";
for (let i3 = 0; i3 < 5000; ++i3) {
    script += "dummy, ";
}
script += "dummy";
let v13;
try { v13 = new Function(script, "return recursionCount ? g(recursionCount - 1) : 0;"); } catch (e) {}
var g = v13;
try { noInline(g); } catch (e) {}
for (let i18 = 0; i18 < 10000; ++i18) {
    try { g(1); } catch (e) {}
}
try {
    try { g(1000000); } catch (e) {}
} catch(e28) {
    if (!(e28 instanceof RangeError)) {
        throw "bad value for e";
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
// #FailureMessage Object: 0x7fe3d0bee700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x564ca261ca82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x564ca261b2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x564ca260f546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x564ca260ed95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x564ca412813e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x564ca44f37a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x564ca40853eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x564ca4033150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x564ca402ffd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x564ca3d865d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x564ca3d7d7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x564ca27fbcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x564ca3d80588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x564ca262014f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x564ca262b925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x564ca2618650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fe3dbfa9ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fe3dc03b850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 131ms
