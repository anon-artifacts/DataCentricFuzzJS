function foo() {
    const v2 = new Array();
    return v2;
}
var a = foo();
a[0] = 1.1;
function store(a7, a8) {
    a7[0] = a8;
}
store([1.1], "a");
store([1.1], 1.1);
var b = foo();
store(b, "a");
