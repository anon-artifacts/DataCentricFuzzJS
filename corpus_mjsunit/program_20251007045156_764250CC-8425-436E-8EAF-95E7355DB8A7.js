function A(a1, a2) {
    this.x = a1;
    this.y = a2;
}
function B(a6, a7) {
    this.x = a6;
    this.y = a7;
}
function F1(a11, a12) {
    if (a11 == a12) {
        return a11.x;
    } else {
        return a12.x;
    }
}
function F2(a17, a18) {
    if (a17 == a18) {
        return a17.x;
    } else {
        return a18.x;
    }
}
function F3(a23, a24) {
    var f = a23.y;
    if (a23 == a24) {
        return a23.x;
    } else {
        return a24.x;
    }
}
function F4(a31, a32) {
    var f = a32.y;
    if (a31 == a32) {
        return a31.x;
    } else {
        return a32.x;
    }
}
function test(a39, a40, a41) {
    a39(a40, a40);
    a39(a40, a41);
    a39(a41, a40);
    a39(a41, c);
    a39(a41, a41);
    a39(c, c);
    a40.x;
    a39(a40, a40);
    a41.x;
    a39(a41, a41);
}
const v55 = new A(3, 5);
var a = v55;
const v59 = new B(2, 6);
var b = v59;
const v63 = new A(1, 7);
var c = v63;
test(F1, a, c);
test(F2, a, b);
test(F3, a, b);
test(F4, a, b);
