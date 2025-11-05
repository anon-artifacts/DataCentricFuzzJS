var o = { a: 1.5 };
o.a = 0;
var a = o.a;
function g() {
    return 1;
}
const v8 = {};
var o2 = { a: v8 };
function f() {
    var result = { a: a };
    const v14 = g();
    var literal = { x: v14 };
    return [result,literal];
}
f();
f();
f()[1].x;
