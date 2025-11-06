console.log("This tests that DFG generated code speculating SlowPutArrayStorageShape doesn't crash when seeing fast ArrayStorageShapes.");
var slowPutArrayStorageArray = ["slow"];
var fastArrayStorageArray = ["fast"];
fastArrayStorageArray[1000] = 50;
var o = { a: 10 };
function f13(a14) {
    this.a = a14;
}
const v16 = { set: f13 };
Object.defineProperties(o, { 0: v16 });
slowPutArrayStorageArray.__proto__ = o;
function foo(a21, a22) {
    var result = 10;
    if (!a21) {
        return result;
    }
    var doStuff = a21[0] && a22;
    if (doStuff) {
        result = a21[0] + 10;
    }
    return result;
}
function test() {
    for (let i34 = 0; i34 < 5000; i34++) {
        foo(slowPutArrayStorageArray, false);
        foo(fastArrayStorageArray, true);
    }
}
test();
var successfullyParsed = true;
