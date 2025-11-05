async function* gen1() {
    const v2 = () => {
    };
    let v3;
    try { v3 = new Promise(v2); } catch (e) {}
    const alwaysPending = v3;
    alwaysPending.then = "non-callable then";
    yield alwaysPending;
}
let v8;
try { v8 = gen(); } catch (e) {}
try { v8.next(); } catch (e) {}
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
// #FailureMessage Object: 0x7fa276220700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x555fb080ea82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x555fb080d2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x555fb0801546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x555fb0800d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x555fb231a13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x555fb26e57a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x555fb22773eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x555fb2225150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x555fb2221fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x555fb1f785d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x555fb1f6f7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x555fb09edcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x555fb1f72588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x555fb081214f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x555fb081d925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x555fb080a650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fa27e5d5ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fa27e667850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 129ms
