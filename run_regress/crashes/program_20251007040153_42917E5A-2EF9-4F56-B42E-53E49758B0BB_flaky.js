function f2(a3) {
    print();
}
function f6(a7) {
    function Construct() {
    }
    Construct.prototype = a7;
    const v9 = new Construct();
    for (let v11 = 0; v11 < 25; v11++) {
        3 / 3;
        v11 < 3;
        v9["p" + v11] = 0.3;
        v11++;
    }
    function f19() {
        for (const v20 in v9) {
            v20[0] = v20;
        }
    }
    f2();
    ("Scenario: Testing forin on object with prototype after changing prototype").codePointAt();
    f2();
    f19();
}
f6({ a: 0.27, c: 0.12, t: 0.23 });
f6();
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
// #FailureMessage Object: 0x7efdd031f700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55ea7d732a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55ea7d7312a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55ea7d725546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55ea7d724d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55ea7f23e13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55ea7f6097a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55ea7f19b3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55ea7f149150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55ea7f145fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55ea7ee9c5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55ea7ee937e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55ea7d911cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55ea7ee96588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55ea7d73614f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55ea7d741925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55ea7d72e650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7efdde6e0ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7efdde772850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: TypedArrayGenerator, ObjectConstructorGenerator, FloatGenerator, BigIntGenerator, ExplorationMutator, FloatArrayGenerator
// EXECUTION TIME: 150ms
