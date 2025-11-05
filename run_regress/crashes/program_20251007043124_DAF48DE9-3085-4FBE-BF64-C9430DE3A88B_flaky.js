var target = {};
Object.preventExtensions(target);
const v4 = () => {
    return {};
};
var handler = { getOwnPropertyDescriptor: v4 };
const v9 = new Proxy(target, handler);
for (const v13 of [v9,Proxy.revocable(target, handler).proxy]) {
    const v14 = () => {
        let v16;
        try { v16 = Object.getOwnPropertyDescriptor(v13, "foo"); } catch (e) {}
        return v16;
    };
    v14();
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
// #FailureMessage Object: 0x7fa726bc7700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x565221315a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5652213142a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x565221308546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x565221307d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x565222e2113e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5652231ec7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x565222d7e3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x565222d2c150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x565222d28fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x565222a7f5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x565222a767e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5652214f4cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x565222a79588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x56522131914f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x565221324925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x565221311650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fa72ff8eac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fa730020850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 360ms
