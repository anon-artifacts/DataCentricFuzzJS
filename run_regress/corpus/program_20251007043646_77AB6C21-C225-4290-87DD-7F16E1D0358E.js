var e31 = Math.pow(2, 31);
-e31;
-1 * e31;
(-1 * e31) * -1;
-1 * -e31;
-e31 * -1;
function f23() {
    return 1;
}
var x = { toString: f23 };
function add(a28, a29) {
    return a28 + a29;
}
add(1, x);
add(1, x);
add(1, x);
function f37() {
    return "2";
}
x.toString = f37;
add(1, x);
function Checker() {
    this.str = "1";
    var toStringCalled = 0;
    var toStringExpected = 0;
    function f49() {
        toStringCalled++;
        return this.str;
    }
    this.toString = f49;
    function f54() {
        toStringExpected++;
    }
    this.check = f54;
}
const v57 = new Checker();
var left = v57;
const v59 = new Checker();
var right = v59;
function test(a62, a63, a64, a65, a66) {
    left.str = a64;
    right.str = a65;
    try {
        a63(a64, a65);
        a62(left, right);
        !a66;
    } catch(e70) {
        if (e70 instanceof TypeError) {
            !(!a66);
        } else {
            throw e70;
        }
    } finally {
        left.check();
        if (!a66 || (a66 > 1)) {
            right.check();
        }
    }
}
function minus(a82, a83) {
    return a82 - a83;
}
function check_minus(a86, a87) {
    return a86 - a87;
}
function mod(a90, a91) {
    return a90 % a91;
}
function check_mod(a94, a95) {
    return a94 % a95;
}
test(minus, check_minus, 1, 2);
test(minus, check_minus, 1 << 30, 1);
test(minus, check_minus, 1, 1 << 30);
test(minus, check_minus, 1 << 30, -(1 << 30));
test(minus, check_minus, 1, 1.4);
test(minus, check_minus, 1.3, 4);
test(minus, check_minus, 1.3, 1.4);
test(minus, check_minus, 1, 2);
test(minus, check_minus, 1, undefined);
test(minus, check_minus, 1, 2);
test(minus, check_minus, 1, true);
test(minus, check_minus, 1, 2);
test(minus, check_minus, 1, null);
test(minus, check_minus, 1, 2);
test(minus, check_minus, 1, "");
test(minus, check_minus, 1, 2);
test(minus, check_minus, {}, 1, 1);
test(minus, check_minus, 1, {}, 2);
const v162 = {};
test(minus, check_minus, v162, {}, 1);
test(minus, check_minus, 1, 2);
test(mod, check_mod, 1, 2);
test(mod, check_mod, 1, 2);
test(mod, check_mod, 1 << 30, 1);
test(mod, check_mod, 1 << 30, 1);
test(mod, check_mod, 1, 1 << 30);
test(mod, check_mod, 1, 1 << 30);
test(mod, check_mod, 1 << 30, -(1 << 30));
test(mod, check_mod, 1 << 30, -(1 << 30));
test(mod, check_mod, 1, {}, 2);
test(mod, check_mod, 1, {}, 2);
test(mod, check_mod, 1, 2);
function t1(a223, a224) {
    return a223 - a224;
}
t1(1, 2);
1 - 2;
t1(2, true);
2 - 1;
t1(false, 2);
0 - 2;
t1(1, 2.4);
1 - 2.4;
t1(1.3, 2.4);
1.3 - 2.4;
t1(true, 2.4);
1 - 2.4;
t1(1, undefined);
1 - NaN;
t1(1, 1 << 30);
1 - (1 << 30);
t1(1, 2);
1 - 2;
function t2(a285, a286) {
    return a285 / a286;
}
t2(1, 2);
1 / 2;
t2(null, 2);
0 / 2;
t2(null, -2);
0 / -2;
t2(2, null);
2 / 0;
t2(-2, null);
-2 / 0;
t2(1, 2.4);
1 / 2.4;
t2(1.3, 2.4);
1.3 / 2.4;
t2(null, 2.4);
0 / 2.4;
t2(1.3, null);
1.3 / 0;
t2(undefined, 2);
NaN / 2;
t2(1, 1 << 30);
1 / (1 << 30);
t2(1, 2);
1 / 2;
function string_add(a368, a369) {
    var d = [0.1,,0.3];
    return a368 + d[a369];
}
string_add(1.1, 0);
string_add("", 0);
string_add(1.1, 0);
string_add("", 1);
