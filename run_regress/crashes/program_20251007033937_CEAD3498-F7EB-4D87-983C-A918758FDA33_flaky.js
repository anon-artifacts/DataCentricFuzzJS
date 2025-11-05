const v2 = { configurable: true };
var proto = Object.create(null, { foo: v2 });
const v8 = { configurable: true };
var descs = { bar: v8 };
const v12 = { configurable: true };
descs[Symbol.for("quux")] = v12;
var target = Object.create(proto, descs);
const v20 = new Proxy(target, {});
for (const v25 of [v20,Proxy.revocable(target, {}).proxy]) {
    ({}).hasOwnProperty.call(v25, "foo");
    ({}).hasOwnProperty.call(v25, "bar");
    ({}).hasOwnProperty.call(v25, "quux");
    const v42 = Symbol("quux");
    ({}).hasOwnProperty.call(v25, v42);
    ({}).hasOwnProperty.call(v25, "Symbol(quux)");
    const v53 = Symbol.for("quux");
    ({}).hasOwnProperty.call(v25, v53);
}
var called;
function f60() {
    called = true;
}
function f62() {
}
var handler = { getOwnPropertyDescriptor: f60, has: f62 };
const v69 = new Proxy({}, handler);
for (const v74 of [v69,Proxy.revocable({}, handler).proxy]) {
    called = false;
    ({}).hasOwnProperty.call(v74, "foo");
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
// #FailureMessage Object: 0x7f231b795700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5641ebcc8a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5641ebcc72a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5641ebcbb546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5641ebcbad95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5641ed7d413e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5641edb9f7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5641ed7313eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5641ed6df150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5641ed6dbfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5641ed4325d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5641ed4297e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5641ebea7cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5641ed42c588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5641ebccc14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5641ebcd7925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5641ebcc4650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f2327351ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f23273e3850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 175ms
