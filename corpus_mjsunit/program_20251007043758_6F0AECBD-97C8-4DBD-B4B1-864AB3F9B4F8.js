function f(a1, a2) {
    a1[a2 + 4] = 23;
    return a1;
}
var i = 1073741824;
f({}, 1)[1 + 4];
f([], 2)[2 + 4];
f({}, i)[i + 4];
