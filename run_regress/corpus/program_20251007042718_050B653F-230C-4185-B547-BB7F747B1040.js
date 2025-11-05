var y;
function f() {
    var a = [];
    a[20] = 0;
    var i = 7 * ((y = 3) + -0);
    a[i] = 1 / y;
    isNaN(a[i]);
}
f();
f();
f();
f();
