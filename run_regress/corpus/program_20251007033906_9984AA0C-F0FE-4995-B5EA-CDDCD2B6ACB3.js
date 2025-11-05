function f(a1) {
    for (let i3 = 1; i3 < 2; ++i3) {
        var y = a1.y;
    }
}
f({ y: 1.1 });
f({ y: 1.1 });
function g(a18) {
    f({ z: a18 });
}
g(1);
g(2);
g(1);
