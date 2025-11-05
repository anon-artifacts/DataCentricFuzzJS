new Uint8ClampedArray();
function shouldBe(a8, a9) {
    if (a8 !== a9) {
        throw Error;
    }
}
try { noInline(shouldBe); } catch (e) {}
function test(a16) {
    return "return" in a16;
}
var object1 = {};
const v22 = { hello: 42 };
for (let v24 = 0; v24 < 100; v24++) {
    v24 < 10;
    function f29(a30) {
        const v32 = a30 | 0;
        a30 = v32;
        switch (v32 | 0) {
            case 0:
            case 1:
            case 2:
                return 2;
            case 3:
                return 3;
            case 4:
                return 5;
            case 5:
                return 8;
            case 6:
            case 7:
            case 8:
                return 34;
            case 9:
        }
        return -1;
    }
    var asmModuleSwitch = { fib: f29 };
    print();
    print(1);
    print(asmModuleSwitch.fib(2));
    print(asmModuleSwitch.fib(3));
    print(asmModuleSwitch.fib(4));
    asmModuleSwitch.fib(5);
    let v73;
    try { v73 = test(object1); } catch (e) {}
    try { shouldBe(v73, false); } catch (e) {}
    ++v24;
}
for (let i78 = 0; i78; ++i78) {
    const v84 = test();
    try { shouldBe(v84, false); } catch (e) {}
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
// #FailureMessage Object: 0x7fc05f273700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55b360ee0a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55b360edf2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55b360ed3546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55b360ed2d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55b3629ec13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55b362db77a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55b3629493eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55b3628f7150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55b3628f3fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55b36264a5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55b3626417e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55b3610bfcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55b362644588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55b360ee414f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55b360eef925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55b360edc650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fc06c632ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fc06c6c4850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 122ms
