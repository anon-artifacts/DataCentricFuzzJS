const v1 = {};
function f2(a3) {
}
const v5 = new Proxy(v1, { has: f2 });
var p = v5;
const t5 = RegExp.prototype;
t5.__proto__ = p;
function f() {
    if (/a/.exec("a")) {
        return 1;
    }
    return 0;
}
const t13 = RegExp.prototype;
delete t13.test;
f();
