function load(a1, a2) {
    return a1[a2];
}
function f2(a5, a6, a7, a8, a9) {
    return load(arguments, a9);
}
f2(1, 2, 3, 4, "foo");
f2(1, 2, 3, 4, "foo");
load([11,22,33], 0);
f2(11, 22, 33, 44, 0);
f2(11, 22, 33, 44, 0);
