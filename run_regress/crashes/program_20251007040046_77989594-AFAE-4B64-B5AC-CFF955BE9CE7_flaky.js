try { gczeal(4); } catch (e) {}
let v4;
try { v4 = new Set(); } catch (e) {}
var s = v4;
const v7 = -0;
try { s.add(v7); } catch (e) {}
try { s.add(0); } catch (e) {}
const v12 = -0;
try { s.delete(v12); } catch (e) {}
try { s.has(0); } catch (e) {}
const v19 = -0;
try { s.has(v19); } catch (e) {}
let v23;
try { v23 = new Map(); } catch (e) {}
var m = v23;
const v26 = -0;
try { m.set(v26, "x"); } catch (e) {}
try { m.has(0); } catch (e) {}
try { m.get(0); } catch (e) {}
const v36 = -0;
try { m.has(v36); } catch (e) {}
const v40 = -0;
try { m.delete(v40); } catch (e) {}
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
// #FailureMessage Object: 0x7f88e655c700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55fb82f41a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55fb82f402a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55fb82f34546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55fb82f33d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55fb84a4d13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55fb84e187a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55fb849aa3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55fb84958150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55fb84954fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55fb846ab5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55fb846a27e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55fb83120cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55fb846a5588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55fb82f4514f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55fb82f50925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55fb82f3d650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f88f2919ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f88f29ab850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 182ms
