try {
    function f() {
    }
    f(("").match(/(?:(?=g)).{2147483648,}/ + /[]/), null);
} catch(e8) {
}
const v12 = new RegExp("a[-\xDE]+M", "gi");
var re = v12;
re.exec("");
const v18 = new RegExp("a[-\u00b8]+?c", "gi");
var re = v18;
re.exec("");
const v24 = new RegExp("a[-\u00f8]?c", "gi");
var re = v24;
re.exec("");
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
// #FailureMessage Object: 0x7fad71ea3700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x56515408fa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x56515408e2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x565154082546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x565154081d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x565155b9b13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x565155f667a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x565155af83eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x565155aa6150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x565155aa2fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5651557f95d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5651557f07e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x56515426ecb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5651557f3588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x56515409314f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x56515409e925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x56515408b650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fad7c25cac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fad7c2ee850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 114ms
