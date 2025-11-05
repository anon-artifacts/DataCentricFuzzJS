function f() {
    var x = -([NaN])[0];
    x === x;
    x !== x;
    x == x;
    x != x;
    var y = -("x" / {});
    var z = y;
    y === z;
    y !== z;
    y == z;
    y != z;
}
f();
function g(a30, a31) {
    var z = a30 / a31;
    z === z;
}
g(0, 0);
