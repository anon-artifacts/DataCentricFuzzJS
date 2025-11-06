function testIsInteger(a1) {
    var x = Number.isInteger(a1);
    return a1;
}
for (let i6 = 0; i6 < 100000; i6++) {
    var r = testIsInteger(13.37);
    if (r === false) {
        throw "Wrong value returned from function calling Number.isInteger";
    }
}
