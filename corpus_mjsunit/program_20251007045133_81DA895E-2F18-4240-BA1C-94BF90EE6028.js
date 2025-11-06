var X = "x";
function C() {
    this[X] = 42;
}
const v5 = new C();
var a = v5;
const v7 = new C();
var b = v7;
a.x;
b.x;
