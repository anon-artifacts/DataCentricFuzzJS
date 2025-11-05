function f0() {
}
let log = [];
const v4 = Object?.prototype;
const v12 = {
    configurable: true,
    get() {
        try { log.push("size"); } catch (e) {}
        try { log.push(this); } catch (e) {}
        return undefined;
    },
};
try { Object.defineProperty(v4, "size", v12); } catch (e) {}
const t13 = Object?.prototype;
t13.highWaterMark = 1337;
const v23 = {
    start(a18) {
        try { log.push("start"); } catch (e) {}
        const v21 = a18?.desiredSize;
        try { log.push(v21); } catch (e) {}
    },
};
let v24;
try { v24 = new ReadableStream(v23); } catch (e) {}
let s = v24;
["size",{},"start",1337];
if (typeof f0 == "function") {
    try { f0(0, 0); } catch (e) {}
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
// #FailureMessage Object: 0x7efd93943700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x557a54e57a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x557a54e562a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x557a54e4a546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x557a54e49d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x557a5696313e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x557a56d2e7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x557a568c03eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x557a5686e150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x557a5686afd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x557a565c15d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x557a565b87e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x557a55036cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x557a565bb588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x557a54e5b14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x557a54e66925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x557a54e53650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7efda0501ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7efda0593850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 117ms
