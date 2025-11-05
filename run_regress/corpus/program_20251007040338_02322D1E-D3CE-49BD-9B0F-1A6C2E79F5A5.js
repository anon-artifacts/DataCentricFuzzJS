function f1() {
    return this?.i;
}
var o1 = { i: 0, valueOf: f1 };
result = 0;
function foo(a9, a10) {
    var result = 0;
    for (let i14 = 0; i14 < 10; i14++) {
        var temp;
        if (a9 > a10) {
            temp = a9 >> a10;
        } else {
            temp = a10 >> 1;
        }
        result += temp;
    }
    var origResult = result;
    for (let i28 = 1; i28 < 1000; i28++) {
        result = result >> i28;
    }
    result = origResult > result ? origResult : result;
    return result;
}
try { noInline(foo); } catch (e) {}
var iterations;
var expectedResult;
if (this?.window) {
    iterations = 10000;
    expectedResult = 439840;
} else {
    iterations = 100000;
    expectedResult = 48330800;
}
for (let i50 = 0; i50 <= iterations; i50++) {
    o1.i = i50;
    if (i50 % 2) {
        let v58;
        try { v58 = foo(o1, 10); } catch (e) {}
        result += v58;
    } else {
        let v61;
        try { v61 = foo(i50, 10); } catch (e) {}
        result += v61;
    }
}
if (result != expectedResult) {
    throw "Bad result: " + result;
}
