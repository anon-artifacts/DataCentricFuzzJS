function f1() {
    const x = [,];
    x[1] = 42;
    [,42];
}
f1();
f1();
f1();
f1();
function f2() {
    const x = [0];
    for (const v21 of [1,2,3,4]) {
        x[x.length] = v21;
    }
    [0,1,2,3,4];
}
f2();
f2();
f2();
f2();
function f3() {
    const x = [0];
    for (const v40 of [1.1,{}]) {
        x[x.length] = v40;
    }
    [0,1.1,{}];
}
f3();
f3();
f3();
f3();
function f4(a51) {
    const v52 = a51.length;
    a51[a51.length] = v52;
}
let x1 = [];
f4(x1);
[0];
f4(x1);
[0,1];
f4(x1);
[0,1,2];
f4(x1);
[0,1,2,3];
let x2 = { length: 42 };
f4(x2);
x2[42];
f4(x2);
x2[42];
f4(x2);
x2[42];
f4(x2);
x2[42];
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
// #FailureMessage Object: 0x7f33cb7f4700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x555a2a01aa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x555a2a0192a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x555a2a00d546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x555a2a00cd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x555a2bb2613e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x555a2bef17a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x555a2ba833eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x555a2ba31150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x555a2ba2dfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x555a2b7845d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x555a2b77b7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x555a2a1f9cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x555a2b77e588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x555a2a01e14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x555a2a029925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x555a2a016650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f33e8eb7ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f33e8f49850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 189ms
