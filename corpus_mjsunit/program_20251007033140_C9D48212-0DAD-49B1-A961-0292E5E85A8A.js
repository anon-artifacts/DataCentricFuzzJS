function F() {
    this.x = 42;
    this.y = 87;
}
new F();
new F();
var result_x;
function f10(a11) {
    result_x = a11;
}
Object.prototype.__defineSetter__("x", f10);
const v15 = new F();
var f = v15;
typeof f.x == "undefined";
var result_y;
const v24 = new Object();
var proto = v24;
function f27(a28) {
    result_y = a28;
}
proto.__defineSetter__("y", f27);
const v30 = new F();
var f = v30;
f.y = undefined;
f.__proto__ = proto;
F.call(f);
typeof f.y == "undefined";
var result_z;
const v41 = new Object();
var o1 = v41;
const v43 = new Object();
var o2 = v43;
o1.z = 32;
function f47(a48) {
    result_z = a48;
}
Object.prototype.__defineSetter__("z", f47);
o2.z = 27;
typeof o2.z == "undefined";
