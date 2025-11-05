function test1() {
    var a = {};
    var r;
    a.NaN = "orig";
    for (let i7 = 0; i7 < 1; ++i7) {
        r = a.NaN;
        a[i7 = Math.pow(1, Infinity)] = "new";
        r = a.NaN;
    }
    return r;
}
function test2() {
    var a = {};
    var r;
    a.Infinity = "orig";
    for (let i27 = 0; i27 < 1; ++i27) {
        r = a.Infinity;
        a[i27 = 1 / 0] = "new";
        r = a.Infinity;
    }
    return r;
}
function test3() {
    var a = {};
    a[-Infinity] = "orig";
    var r;
    for (let i48 = 0; i48 > -1; --i48) {
        r = a["-Infinity"];
        a[i48 = -1 / 0] = "new";
        r = a["-Infinity"];
    }
    return r;
}
function test4() {
    var a = {};
    var r;
    a[1.23] = "orig";
    for (let i72 = 1; i72 < 2; ++i72) {
        r = a[1.23];
        a[i72 = 1 + 0.23] = "new";
        r = a["1.23"];
    }
    return r;
}
function test5() {
    var a = {};
    var r;
    a.NaN = "orig";
    for (let i93 = 0; i93 < 1; ++i93) {
        r = a.NaN;
        a[i93 = Math.pow(1, Infinity)] = "new";
        r = a[NaN];
    }
    return r;
}
function test6() {
    var a = {};
    var r;
    a[1.23] = "orig";
    for (let i115 = 1; i115 < 2; ++i115) {
        r = a[1.23];
        a[i115 = 1 + 0.23] = "new";
        r = a[1.23];
    }
    return r;
}
var isPass = true;
function reportError(a132, a133) {
    print(a132, a133);
    isPass = false;
}
var expected = "new";
var r1 = test1();
var r2 = test2();
var r3 = test3();
var r4 = test4();
var r5 = test5();
var r6 = test6();
if (r1 != expected) {
    reportError("bug: r1 =", r1);
}
if (r2 != expected) {
    reportError("bug: r2 =", r2);
}
if (r3 != expected) {
    reportError("bug: r3 =", r3);
}
if (r4 != expected) {
    reportError("bug: r4 =", r4);
}
if (r5 != expected) {
    reportError("bug: r5 =", r5);
}
if (r6 != expected) {
    reportError("bug: r6 =", r6);
}
if (isPass) {
    print("PASS");
}
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// 
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 116ms
