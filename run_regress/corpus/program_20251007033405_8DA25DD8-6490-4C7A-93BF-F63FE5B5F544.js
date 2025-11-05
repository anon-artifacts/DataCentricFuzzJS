const v2 = new Int32Array(1);
var array = v2;
function foo(a5) {
    array[0] = a5;
    return array[0];
}
function test(a8, a9) {
    var result = foo(a8);
    if (result != a9) {
        throw (((("Error: " + a8) + " was supposed to result in ") + a9) + " but instead got ") + result;
    }
}
for (let i22 = 0; i22 < 100000; ++i22) {
    test(i22 + 0.5, i22);
}
test(0, 0);
test(100.5, 100);
test(-100.5, -100);
test(3000000000, -1294967296);
test(-3000000000, 1294967296);
test(-2147483648, -2147483648);
