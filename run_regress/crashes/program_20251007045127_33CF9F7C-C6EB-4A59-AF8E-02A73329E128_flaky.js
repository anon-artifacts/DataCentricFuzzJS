function test1() {
    const v2 = new WeakMap();
    var wm1 = v2;
    wm1.set(Object.prototype, 23);
    wm1.has(Object.prototype);
    Object.freeze(Object.prototype);
    const v12 = new WeakMap();
    var wm2 = v12;
    var o = {};
    wm2.set(o, 42);
    wm2.get(o);
}
test1();
function test2() {
    const v23 = new WeakMap();
    var wm1 = v23;
    var o1 = {};
    wm1.set(o1, 23);
    wm1.has(o1);
    Object.freeze(o1);
    const v32 = new WeakMap();
    var wm2 = v32;
    var o2 = Object.create(o1);
    wm2.set(o2, 42);
    wm2.get(o2);
}
test2();
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
// #FailureMessage Object: 0x7fa12839d700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55c29aa20a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55c29aa1f2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55c29aa13546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55c29aa12d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55c29c52c13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55c29c8f77a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55c29c4893eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55c29c437150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55c29c433fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55c29c18a5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55c29c1817e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55c29abffcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55c29c184588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55c29aa2414f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55c29aa2f925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55c29aa1c650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fa136f5fac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fa136ff1850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 170ms
