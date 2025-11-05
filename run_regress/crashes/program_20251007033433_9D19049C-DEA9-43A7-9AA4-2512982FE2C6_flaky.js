function f1() {
    var args = arguments;
    const v4 = () => {
        return args?.[0];
    };
    return v4;
}
let v6;
try { v6 = f1(1); } catch (e) {}
var fn = v6;
try { noInline(fn); } catch (e) {}
for (let i11 = 0; i11 < 10000; i11++) {
    let v18;
    try { v18 = fn(2); } catch (e) {}
    if (v18 !== 1) {
        throw 0;
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
// #FailureMessage Object: 0x7f2660443700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x564162d5da82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x564162d5c2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x564162d50546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x564162d4fd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x56416486913e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x564164c347a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5641647c63eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x564164774150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x564164770fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5641644c75d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5641644be7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x564162f3ccb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5641644c1588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x564162d6114f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x564162d6c925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x564162d59650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f266d001ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f266d093850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 137ms
