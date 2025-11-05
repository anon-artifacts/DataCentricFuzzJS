function h(a1, a2) {
    for (let i4 = 0; i4 < a1.length; i4++) {
        h(a1[i4], a2[i4]);
    }
}
function g() {
    h(arguments.length, 2);
}
function f() {
    return g(1, 2);
}
b = [1,,];
b[1] = 3.5;
h(b, [1073741823,2147483648,-12]);
f();
f();
f();
