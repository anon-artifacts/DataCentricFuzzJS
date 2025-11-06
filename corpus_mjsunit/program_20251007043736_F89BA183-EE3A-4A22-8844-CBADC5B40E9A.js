function foo(a1) {
    a1[0] = 3;
}
var v = [,6];
v.__proto__ = [];
foo(v);
delete v[0];
var count = 0;
function f14() {
    count++;
}
v.__proto__.__defineSetter__(0, f14);
foo([1,,,2]);
foo(v);
