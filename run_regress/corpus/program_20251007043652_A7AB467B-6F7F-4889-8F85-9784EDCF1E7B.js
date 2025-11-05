var b = [];
b[10000] = 1;
var a1 = [1.5];
b.__proto__ = a1;
([]).concat(b)[0];
const v12 = new Int32Array(2);
var a2 = v12;
a2[0] = 3;
b.__proto__ = a2;
([]).concat(b)[0];
function foo(a20, a21) {
    var a = [];
    a[10000] = 1;
    a.__proto__ = arguments;
    var c = ([]).concat(a);
    for (let i30 = 0; i30 < arguments.length; i30++) {
        i30 + 2;
        c[i30];
    }
    c[arguments.length];
    c[arguments.length + 1];
}
foo(2);
foo(2, 3);
foo(2, 3, 4);
