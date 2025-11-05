function f(a1) {
    a1[a1.length] = 1;
}
function g(a5, a6, a7) {
    a5[a6] = a7;
}
f([]);
o = {};
g(o);
f(o = {});
