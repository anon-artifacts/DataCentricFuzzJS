function foo() {
    var a = [,];
    a[0] = {};
    const t3 = a[0];
    t3.toString = FAIL;
}
try {
    foo();
} catch(e8) {
}
try {
    foo();
} catch(e10) {
}
try {
    foo();
} catch(e12) {
}
