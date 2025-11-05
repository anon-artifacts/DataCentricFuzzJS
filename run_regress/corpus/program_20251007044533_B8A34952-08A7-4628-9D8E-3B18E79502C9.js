var x = {};
function f3() {
    try {
        y.x = 40;
    } catch(e6) {
        e6.stack.split("\n").length;
    }
    return 40;
}
x.__defineGetter__("a", f3);
function f15(a16) {
    try {
        y.x = 40;
    } catch(e19) {
        e19.stack.split("\n").length;
    }
}
x.__defineSetter__("a", f15);
function getB() {
    try {
        y.x = 30;
    } catch(e29) {
        e29.stack.split("\n").length;
    }
    return 30;
}
function setB(a37) {
    try {
        y.x = 30;
    } catch(e40) {
        e40.stack.split("\n").length;
    }
}
x.__defineGetter__("b", getB);
x.__defineSetter__("b", setB);
function f50() {
    try {
        y.x = 40;
    } catch(e53) {
        e53.stack.split("\n").length;
    }
    return 40;
}
function f60(a61) {
    try {
        y.x = 40;
    } catch(e64) {
        e64.stack.split("\n").length;
    }
}
var descriptor = { get: f50, set: f60 };
Object.defineProperty(x, "c", descriptor);
x.a;
x.b;
x.c;
x.a = 1;
x.b = 1;
x.c = 1;
xx = {};
xx.__proto__ = x;
xx.a;
xx.b;
xx.c;
xx.a = 1;
xx.b = 1;
xx.c = 1;
