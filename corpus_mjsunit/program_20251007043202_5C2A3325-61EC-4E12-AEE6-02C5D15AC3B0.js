function g(a1) {
    arguments.length;
    a1.length;
}
function f() {
    for (let i9 = 0; i9 < 9; i9++) {
        g(arguments);
    }
}
f(1, 2, 3, 4);
