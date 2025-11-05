function zero() {
    var x = 0.5;
    function f3() {
        return x - 0.5;
    }
    return f3();
}
function test() {
    Math.abs(0);
    Math.abs(zero());
    Math.abs(-0);
    Math.abs(Infinity);
    Math.abs(-Infinity);
    Math.abs(NaN);
    Math.abs(-NaN);
    Math.abs(Number("+Infinity")).toString();
    Math.abs(Number("-Infinity")).toString();
    Math.abs(NaN).toString();
    Math.abs(-NaN).toString();
    Math.abs(0.1);
    Math.abs(0.5);
    Math.abs(-0.1);
    Math.abs(-0.5);
    Math.abs(1);
    Math.abs(1.1);
    Math.abs(1.5);
    Math.abs(-1);
    Math.abs(-1.1);
    Math.abs(-1.5);
    Number.MIN_VALUE;
    Math.abs(Number.MIN_VALUE);
    Number.MIN_VALUE;
    Math.abs(-Number.MIN_VALUE);
    Number.MAX_VALUE;
    Math.abs(Number.MAX_VALUE);
    Number.MAX_VALUE;
    Math.abs(-Number.MAX_VALUE);
    var two_30 = 1 << 30;
    Math.abs(two_30);
    Math.abs(-two_30);
    two_30 + 1;
    Math.abs(two_30 + 1);
    two_30 + 1;
    Math.abs(-two_30 - 1);
    two_30 - 1;
    Math.abs(two_30 - 1);
    two_30 - 1;
    Math.abs(-two_30 + 1);
    var two_31 = 2 * two_30;
    Math.abs(two_31);
    Math.abs(-two_31);
    two_31 + 1;
    Math.abs(two_31 + 1);
    two_31 + 1;
    Math.abs(-two_31 - 1);
    two_31 - 1;
    Math.abs(two_31 - 1);
    two_31 - 1;
    Math.abs(-two_31 + 1);
    Math.abs("not a number");
    Math.abs([1,2,3]);
    function f159() {
        return 42;
    }
    Math.abs({ valueOf: f159 });
    function f164() {
        return -42;
    }
    Math.abs({ valueOf: f164 });
}
for (let i170 = 0; i170 < 500; i170++) {
    test();
}
function foo(a178) {
    return Math.abs(a178);
}
for (let i182 = 0; i182 < 1000; i182++) {
    foo(-i182);
}
foo(-42);
foo(-42);
var a = [-1,-2];
function foo2() {
    return Math.abs(a[0]);
}
foo2();
foo2();
foo2();
function absHalf(a215) {
    var x = 1 << (a215 - 1);
    var half = Math.abs(x);
    return half;
}
bits = 32;
absHalf(bits);
absHalf(bits);
absHalf(bits);
