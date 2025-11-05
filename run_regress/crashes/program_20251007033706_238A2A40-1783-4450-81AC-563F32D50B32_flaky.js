function strict() {
    'use strict';
    return this;
}
function lenient() {
    return this;
}
var obj = {};
const t8 = strict.bind(true);
t8();
const t9 = strict.bind(42);
t9();
const t11 = strict.bind("");
t11();
const t13 = strict.bind(null);
t13();
const t15 = strict.bind(undefined);
t15();
const t17 = strict.bind(obj);
t17();
const t19 = lenient.bind(true);
t19() instanceof Boolean;
const t21 = lenient.bind(42);
t21() instanceof Number;
const t23 = lenient.bind("");
t23() instanceof String;
const t25 = lenient.bind(null);
t25();
const t27 = lenient.bind(undefined);
t27();
const t29 = lenient.bind(obj);
t29();
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
// #FailureMessage Object: 0x7ff5868a3700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5585cd2a0a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5585cd29f2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5585cd293546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5585cd292d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5585cedac13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5585cf1777a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5585ced093eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5585cecb7150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5585cecb3fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5585cea0a5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5585cea017e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5585cd47fcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5585cea04588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5585cd2a414f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5585cd2af925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5585cd29c650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7ff58ec58ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7ff58ecea850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 136ms
