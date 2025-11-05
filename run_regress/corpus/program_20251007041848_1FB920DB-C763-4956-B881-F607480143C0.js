function testOp(a1) {
    return Math.abs(a1);
}
print(testOp(123.334) === 123.334);
print(testOp(-123.334) === 123.334);
print(isNaN(testOp(NaN)));
print(isNaN(testOp(-NaN)));
print(testOp(Infinity) === Infinity);
print(testOp(-Infinity) === Infinity);
print(testOp(0) === 0);
print(testOp(-0) === 0);
