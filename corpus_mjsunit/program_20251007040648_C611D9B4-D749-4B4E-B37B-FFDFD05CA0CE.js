const v1 = new Object();
var x = v1;
x.a = 7;
function f4() {
    return 42;
}
x.b = f4;
x.c = 88;
x.d = "A Man Called Horse";
x.a;
x.b();
x.c;
x.d;
const v16 = new Object();
var y = v16;
y.a = 7;
function f19() {
    return 42;
}
y.b = f19;
y.c = 12 * y.a;
y.d = "A Man Called Horse";
y.c;
const v27 = new Object();
var z = v27;
z.a = 3;
function forty_two() {
    return 42;
}
z.a += 4;
z.b = forty_two;
z.c = 12;
z.c *= z.a;
z.d = "A Man Called Horse";
z.c;
const v38 = new Object();
var x1 = v38;
const v40 = new Object();
var x2 = v40;
x1.a = 7;
function f43() {
    return 42;
}
x1.b = f43;
x2.a = 7;
function f46() {
    return 42;
}
x2.b = f46;
x1.c = 88;
x1.d = "A Man Called Horse";
x2.c = 88;
x2.d = "A Man Called Horse";
x1.a;
x1.b();
x1.c;
x1.d;
x2.a;
x2.b();
x2.c;
x2.d;
function Calculator(a69, a70) {
    this.x = a69;
    this.y = a70;
}
function f73() {
    return this.x + this.y;
}
const t68 = Calculator.prototype;
t68.sum = f73;
function f80() {
    return this.x - this.y;
}
const t73 = Calculator.prototype;
t73.difference = f80;
function f87() {
    return this.x * this.y;
}
const t78 = Calculator.prototype;
t78.product = f87;
function f94() {
    return this.x / this.y;
}
const t83 = Calculator.prototype;
t83.quotient = f94;
const v103 = new Calculator(20, 10);
var calc = v103;
calc.sum();
calc.difference();
calc.product();
calc.quotient();
const v113 = new Object();
var x = v113;
function f116() {
    return 7;
}
x.__defineGetter__("a", f116);
function f119() {
    return 42;
}
x.b = f119;
x.c = 88;
x.d = "A Man Called Horse";
x.a;
x.b();
x.c;
x.d;
