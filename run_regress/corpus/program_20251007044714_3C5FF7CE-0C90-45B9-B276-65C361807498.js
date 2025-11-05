function foo(a1, a2) {
    var result = a1 / 35;
    result += 50 / a2;
    result += a1 / a2;
    result += a1 / -1;
    result += a1 / 1;
    result += a1 / 4;
    result += a1 / -4;
    return result / a2;
}
foo(700, 5);
var r1 = foo(700, 5);
var r2 = foo(700, 5);
function boo(a32) {
    return a32 / -1;
}
boo(-2147483600);
boo(-2147483600);
boo(-2147483600);
boo(-2147483648);
