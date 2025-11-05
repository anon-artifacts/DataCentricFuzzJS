var global = this;
var status = "pass";
const v4 = (a5) => {
    status = "SMASH";
};
const v7 = (a8) => {
    status = "SMASH";
};
const v10 = (a11) => {
    status = "SMASH";
};
var metaHandler = { get: v4, has: v7, invoke: v10 };
const v16 = {};
let v17;
try { v17 = new Proxy(v16, metaHandler); } catch (e) {}
var handler = v17;
let v21;
try { v21 = Object.create(null); } catch (e) {}
let v22;
try { v22 = new Proxy(v21, handler); } catch (e) {}
var angryProxy = v22;
let v25;
try { v25 = globalPrototypeChainIsMutable(); } catch (e) {}
if (v25) {
    this.__proto__ = angryProxy;
    const t25 = Object?.prototype;
    t25.__proto__ = angryProxy;
}
this?.nonExistingProperty;
let v30;
try { v30 = globalPrototypeChainIsMutable(); } catch (e) {}
if (v30) {
} else {
}
status = "pass";
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
// #FailureMessage Object: 0x7fc1c75c4700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55b8bca67a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55b8bca662a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55b8bca5a546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55b8bca59d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55b8be57313e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55b8be93e7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55b8be4d03eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55b8be47e150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55b8be47afd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55b8be1d15d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55b8be1c87e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55b8bcc46cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55b8be1cb588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55b8bca6b14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55b8bca76925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55b8bca63650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fc1d5184ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fc1d5216850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 140ms
