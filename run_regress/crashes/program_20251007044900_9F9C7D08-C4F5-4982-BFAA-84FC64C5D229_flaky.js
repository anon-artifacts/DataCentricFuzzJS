function opt(a1, a2) {
    a2[0];
    a1[0] = 1.1;
    a2.reverse();
    a1[0] = 2.3023e-320;
}
function main() {
    let arr = [1.1,2.2,3.3];
    arr.__proto__ = null;
    delete arr[1];
    let arr2 = [,{}];
    arr2.__proto__ = {};
    arr2.reverse = Array.prototype.reverse;
    for (let i25 = 0; i25 < 10000; i25++) {
        opt(arr, arr2);
    }
    const v32 = () => {
        const t17 = arr2.__proto__;
        t17.__proto__ = arr;
    };
    Array.prototype.sort.call(arr, v32);
    opt(arr, arr2);
    print(arr[0]);
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
// #FailureMessage Object: 0x7fda08a7f700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x559bafe8da82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x559bafe8c2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x559bafe80546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x559bafe7fd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x559bb199913e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x559bb1d647a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x559bb18f63eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x559bb18a4150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x559bb18a0fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x559bb15f75d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x559bb15ee7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x559bb006ccb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x559bb15f1588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x559bafe9114f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x559bafe9c925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x559bafe89650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fda12637ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fda126c9850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 126ms
