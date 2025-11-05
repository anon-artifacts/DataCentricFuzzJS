function g() {
    let v3;
    try { v3 = newGlobal(""); } catch (e) {}
    z = v3;
    function f5(a6) {
        try { evalcx(a6, z); } catch (e) {}
    }
    return f5;
}
let v10;
try { v10 = g(); } catch (e) {}
f = v10;
try { f("    for (var x = 0; x < 1; ++x) {        a = x;    }"); } catch (e) {}
try { f("a in eval"); } catch (e) {}
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
// #FailureMessage Object: 0x7fdd49c65700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x561746a20a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x561746a1f2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x561746a13546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x561746a12d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x56174852c13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5617488f77a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5617484893eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x561748437150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x561748433fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x56174818a5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5617481817e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x561746bffcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x561748184588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x561746a2414f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x561746a2f925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x561746a1c650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fdd57024ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fdd570b6850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 347ms
