function many_hoist(a1, a2) {
    return a1[a2 + 33554427];
}
var obj = {};
many_hoist(obj, 0);
many_hoist(obj, 5);
function constant_too_large(a13, a14) {
    return a13[a14 + 1033554433];
}
constant_too_large(obj, 0);
constant_too_large(obj, 5);
