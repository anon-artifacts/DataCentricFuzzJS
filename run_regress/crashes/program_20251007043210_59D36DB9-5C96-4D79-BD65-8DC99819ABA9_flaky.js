function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
{
    var order = [];
    let target = { x: 20, y: 42 };
    const v30 = {
        getOwnPropertyDescriptor(a15, a16) {
            order.push(`getOwnPropertyDescriptor ${a16}`);
            return { enumerable: true, configurable: true, value: 42 };
        },
        get(a24, a25, a26) {
            order.push(`get ${a25}`);
            return 42;
        },
    };
    let handler = v30;
    const v33 = new Proxy(target, handler);
    let proxy = v33;
    var result = Object.assign({}, proxy);
    shouldBe(result.x, 42);
    shouldBe(result.y, 42);
    shouldBe(order.join(","), `getOwnPropertyDescriptor x,get x,getOwnPropertyDescriptor y,get y`);
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
// #FailureMessage Object: 0x7f85caffb700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x556afe5f3a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x556afe5f22a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x556afe5e6546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x556afe5e5d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x556b000ff13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x556b004ca7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x556b0005c3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x556b0000a150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x556b00006fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x556affd5d5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x556affd547e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x556afe7d2cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x556affd57588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x556afe5f714f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x556afe602925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x556afe5ef650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f85d8fa5ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f85d9037850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 137ms
