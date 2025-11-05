function func(a1, a2, a3) {
    a1[0] = 1.2;
    a2[0] = a3;
    a1[1] = 2.2;
    a1[0] = 2.3023e-320;
}
function main() {
    var a = [1.1,2.2];
    const v14 = new Uint32Array(0);
    var b = v14;
    for (let i17 = 0; i17 < 65536; i17++) {
        func(a, b, i17);
    }
    const v24 = () => {
        a[0] = {};
        return 0;
    };
    func(a, b, { valueOf: v24 });
    a[0].toString();
}
main();
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
// #FailureMessage Object: 0x7f8fdca35700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55c8c3013a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55c8c30122a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55c8c3006546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55c8c3005d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55c8c4b1f13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55c8c4eea7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55c8c4a7c3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55c8c4a2a150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55c8c4a26fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55c8c477d5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55c8c47747e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55c8c31f2cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55c8c4777588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55c8c301714f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55c8c3022925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55c8c300f650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f8fe4deaac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f8fe4e7c850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 153ms
