function f0() {
    var a = [];
    for (let i4 = 0; i4 < 7; i4++) {
        (a = []).push();
        [];
        a.push(1);
        [1];
        a.push(2, 3);
        [1,2,3];
        a.push(4, 5, 6);
        [1,2,3,4,5,6];
        a.push(7, 8, 9, 10);
        [1,2,3,4,5,6,7,8,9,10];
        a.push(11, 12, 13, 14, 15);
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        a.push(16, 17, 18, 19, 20, 21);
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
        a.push(22, 23, 24, 25, 26, 27, 28);
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
    }
}
f0();
function f163() {
    var a;
    for (let i167 = 0; i167 < 7; i167++) {
        (a = []).push(1);
        a.push(2);
        a.push(3);
        a.push(4);
        a.push(5);
        a.push(6);
        a.push(7);
        a.push(8);
        a.push(9);
        a.push(10);
        a.push(11);
        a.push(12);
        a.push(13);
        a.push(14);
        a.push(15);
        a.push(16);
        a.push(17);
        a.push(18);
        a.push(19);
        a.push(20);
        a.push(21);
        a.push(22);
        a.push(23);
        a.push(24);
        a.push(25);
        a.push(26);
        a.push(27);
        a.push(28);
        a.push(29);
    }
}
f163();
function f262() {
    const v263 = [];
    var x = { __proto__: v263 };
    for (let i267 = 0; i267 < 100; i267++) {
        x.push("a");
        i267 + 1;
        x.length;
        i267 + "th iteration";
    }
}
f262();
function f281() {
    function f(a283, a284) {
        a283.push(a284);
    }
    var a = [1,2,3];
    function f291() {
        return 10;
    }
    a.f = f291;
    f(a, 4);
    f(a, 5);
    f(a, 6);
    f(a, 7);
    f(a, {});
    a.f();
}
f281();
function f306() {
    function f(a308, a309) {
        a308.push(a309);
    }
    var a = [1,2,3];
    function f316() {
        return 10;
    }
    a.f = f316;
    f(a, 4);
    f(a, 5);
    f(a, 6);
    f(a, 7);
    f(a, {});
    a.f();
}
f306();
function testDoubleArrayPush() {
    var a = [];
    var max = 1000;
    for (let i337 = 0; i337 < max; i337++) {
        a.push(i337 + 0.1);
    }
    a.length;
    for (let i347 = 0; i347 < max; i347++) {
        i347 + 0.1;
        a[i347];
    }
}
testDoubleArrayPush();
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
// #FailureMessage Object: 0x7fad75ff9700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55e1b3fcea82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55e1b3fcd2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55e1b3fc1546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55e1b3fc0d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55e1b5ada13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55e1b5ea57a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55e1b5a373eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55e1b59e5150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55e1b59e1fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55e1b57385d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55e1b572f7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55e1b41adcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55e1b5732588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55e1b3fd214f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55e1b3fdd925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55e1b3fca650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fad823b6ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fad82448850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 101ms
