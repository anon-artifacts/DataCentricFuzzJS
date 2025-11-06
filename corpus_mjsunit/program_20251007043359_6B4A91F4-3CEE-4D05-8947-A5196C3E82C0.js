function multiple(a1) {
    if (a1 > 10) {
        return a1 * 20;
    }
    return 0;
}
function deeper(a8, a9) {
    return multiple(a8 + a9);
}
function foo() {
    var a = 0;
    for (let i16 = 0; i16 < 10; i16++) {
        a += deeper(2147483632, i16);
    }
    return a;
}
var q = foo();
