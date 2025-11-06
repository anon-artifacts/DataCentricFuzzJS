var pop = Array.prototype.pop;
function foo(a5) {
    a5.length;
    return pop.call(a5);
}
const v9 = new Array(4);
var a = v9;
var o = {};
function f14() {
    return 1;
}
o.__defineGetter__(0, f14);
foo(a);
foo(a);
foo(a);
const t11 = Array.prototype;
t11.__proto__ = o;
foo(a);
