function f1(a2) {
    return -1073741824;
}
function f5(a6, a7, a8, a9) {
    const v11 = {
        __proto__: "bigint",
        ["bigint"]: f1,
        d: f1,
        h: "bigint",
        a: -1073741824,
        get g() {
            return this;
        },
        b: "object",
        e: a7,
        f: a6,
        c: a6,
    };
    return a9;
}
f5(-1073741824, "bigint", f5("object", f5, f5, "object"), f1);
%OptimizeFunctionOnNextCall(f5);
f5();
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
// #FailureMessage Object: 0x7f785a6d1700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55ec624fba82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55ec624fa2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55ec624ee546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55ec624edd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55ec6400713e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55ec643d27a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55ec63f643eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55ec63f12150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55ec63f0efd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55ec63c655d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55ec63c5c7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55ec626dacb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55ec63c5f588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55ec624ff14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55ec6250a925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55ec624f7650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f786728fac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f7867321850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 110ms
