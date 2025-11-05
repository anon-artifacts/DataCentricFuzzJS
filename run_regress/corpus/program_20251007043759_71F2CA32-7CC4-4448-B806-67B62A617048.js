function f() {
    var x;
    try {
        ([1,2,3]).map(x);
    } catch(e10) {
        e10.toString().includes("x is not");
    }
    try {
        ([1,2,3]).filter(x, 1, 2);
    } catch(e24) {
        e24.toString().includes("x is not");
    }
}
f();
