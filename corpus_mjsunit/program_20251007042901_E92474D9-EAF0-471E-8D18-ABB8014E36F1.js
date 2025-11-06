var o = RegExp;
function test(a3) {
    var k = 0;
    a3.input = "bar";
    for (let i8 = 0; i8 < 30000; i8++) {
        a3.input = "foo";
    }
    return a3.input;
}
var result = test(o);
for (let i19 = 0; i19 < 9; i19++) {
    const v26 = new Date();
    var start = v26;
    var newResult = test(o);
    const v30 = new Date();
    var end = v30;
    if (newResult != result) {
        throw (((("Failed at " + i19) + "with ") + newResult) + " vs. ") + result;
    }
    result = newResult;
    o = { __proto__: o };
}
