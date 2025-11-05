const v4 = { a: 1, b: 2, c: 3 };
const v12 = {
    enumerate() {
    },
    ownKeys() {
        return ["a","b"];
    },
};
const v13 = new Proxy(v4, v12);
let proxy = v13;
let object = Object.create(proxy);
object.d = 4;
let a = [];
for (const v21 in object) {
    a.push(v21);
}
a.toString();
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
// #FailureMessage Object: 0x7face8456700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x559c32505a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x559c325042a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x559c324f8546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x559c324f7d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x559c3401113e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x559c343dc7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x559c33f6e3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x559c33f1c150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x559c33f18fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x559c33c6f5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x559c33c667e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x559c326e4cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x559c33c69588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x559c3250914f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x559c32514925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x559c32501650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7facf6016ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7facf60a8850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 161ms
