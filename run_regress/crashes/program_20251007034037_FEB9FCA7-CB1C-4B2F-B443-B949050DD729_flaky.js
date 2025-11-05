function func(a1) {
    i1 = a1 == +((((85450172 - 3341249391) + -134217728) >>> 0) >= 1214645070);
    return i1 + a1;
}
var d1 = 1.015625;
try { func(d1); } catch (e) {}
try { func(d1); } catch (e) {}
try { func(d1); } catch (e) {}
try { func(d1); } catch (e) {}
try { func(d1); } catch (e) {}
try { func(d1); } catch (e) {}
runningJITtedCode = true;
try { func(d1); } catch (e) {}
try { func(d1); } catch (e) {}
try { WScript.Echo("PASSED"); } catch (e) {}
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
// #FailureMessage Object: 0x7f6ff3118700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x558e8552da82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x558e8552c2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x558e85520546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x558e8551fd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x558e8703913e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x558e874047a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x558e86f963eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x558e86f44150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x558e86f40fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x558e86c975d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x558e86c8e7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x558e8570ccb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x558e86c91588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x558e8553114f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x558e8553c925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x558e85529650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f6fffcd6ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f6fffd68850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 174ms
