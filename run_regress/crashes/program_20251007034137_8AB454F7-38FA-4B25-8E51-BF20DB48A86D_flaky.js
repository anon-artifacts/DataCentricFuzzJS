print("Test 1:");
function SimpleObject1() {
    this.a = 1;
    this.b = 2;
    this.c = 3;
}
SimpleObject1.prototype = { p: 0 };
function test1() {
    const v13 = new SimpleObject1();
    var o = v13;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test1();
print(((((((((((((("o = { a: " + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
o = test1();
print(((((((((((((("o = { a: " + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
o = test1();
print(((((((((((((("o = { a: " + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
print("");
print("Test 2:");
function SimpleObject2(a117, a118, a119) {
    this.a = a117;
    this.b = a118;
    this.c = a119;
}
SimpleObject2.prototype = { p: 0 };
function test2() {
    const v129 = new SimpleObject2(1, 2, 3);
    var o = v129;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test2();
print(((((((((((((("o = { a: " + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
o = test2();
print(((((((((((((("o = { a: " + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
o = test2();
print(((((((((((((("o = { a: " + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
print("");
print("Test 3:");
function SimpleObject3(a233, a234, a235) {
    this.a = a233;
    this.b = a234;
    this.c = a235;
}
SimpleObject3.prototype = { p: 0 };
function test3(a242, a243, a244) {
    const v245 = new SimpleObject3();
    var o = v245;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test3(1, 2, 3);
print(((((((((((((("o = { a: " + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
o = test3(1, 2, 3);
print(((((((((((((("o = { a: " + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
o = test3(1, 2, 3);
print(((((((((((((("o = { a: " + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
print("");
print("Test 4:");
function SimpleObject4(a358, a359, a360) {
    this.a = a358;
    this.b = a359;
    this.c = a360;
}
SimpleObject4.prototype = { p: 0 };
function test4() {
    const v367 = new SimpleObject4();
    var o = v367;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test4();
print(((((((((((((("o = { a: " + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
var o = test4();
print(((((((((((((("o = { a: " + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
print(((((((((((((("o = { a: " + (o = test4()).a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
print("");
print("Test 5:");
function SimpleObject5(a472, a473, a474) {
    var o = {};
    o.a = a472;
    o.b = a473;
    o.c = a474;
    return o;
}
SimpleObject5.prototype = { p: 0 };
function test5() {
    const v480 = new SimpleObject5();
    var o = v480;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test5();
print(((((((((((((("o = { a: " + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
var o = test5();
print(((((((((((((("o = { a: " + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
print(((((((((((((("o = { a: " + (o = test5()).a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
print("");
print("Test 6:");
function SimpleObject6(a585, a586, a587) {
    return (a585 + a586) + a587;
}
SimpleObject6.prototype = { p: 0 };
function test6() {
    const v593 = new SimpleObject6();
    var o = v593;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test6();
print(((((((((((((("o = { a: " + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
var o = test6();
print(((((((((((((("o = { a: " + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
print(((((((((((((("o = { a: " + (o = test6()).a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
print("");
print("Test 7:");
function SimpleObject7(a698, a699, a700, a701) {
    this.a = a701 ? a698 : -a698;
    this.b = a701 ? a699 : -a699;
    this.c = a701 ? a700 : -a700;
}
SimpleObject7.prototype = { p: 0 };
function test7(a714, a715, a716, a717) {
    const v718 = new SimpleObject7(a714, a715, a716);
    var o = v718;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = test7(1, 2, 3, false);
print(((((((((((((("o = { a: " + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
o = test7(1, 2, 3, false);
print(((((((((((((("o = { a: " + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
o = test7(1, 2, 3, true);
print(((((((((((((("o = { a: " + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
print("");
print("Test 8:");
function SimpleObject8(a834, a835, a836) {
    this.a = a834;
    this.b = a835;
    this.c = a836;
    throw this;
}
SimpleObject8.prototype = { p: 0 };
function test8(a844, a845, a846) {
    const v847 = new SimpleObject8();
    var o = v847;
    o.x = 4;
    o.y = 5;
    o.z = 6;
    return o;
}
var o = {};
try {
    var o = test8(1, 2, 3);
} catch(e859) {
    print("Exception: " + e859);
}
print(((((((((((((("o = { a: " + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
try {
    o = test8(1, 2, 3);
} catch(e897) {
    print("Exception: " + e897);
}
print(((((((((((((("o = { a: " + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
try {
    o = test8(1, 2, 3);
} catch(e935) {
    print("Exception: " + e935);
}
print(((((((((((((("o = { a: " + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
print("");
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
// EXECUTION TIME: 110ms
