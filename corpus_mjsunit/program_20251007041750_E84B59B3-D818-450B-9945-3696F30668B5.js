function f0() {
}
function foo(a2) {
    var x = a2;
    var n = 0;
    for (let i7 = 0; i7 < 90; i7++) {
        n += x?.f?.g;
        if (i7 >= 80) {
            x = undefined;
        }
    }
    f0(n);
}
var n = 1;
function f() {
}
function g() {
}
g.g = 1;
f.prototype = { f: g };
const v25 = new f();
foo(v25);
