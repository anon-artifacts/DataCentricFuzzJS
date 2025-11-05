function g(a1) {
    Error().stack;
    return g;
}
const v5 = {};
v5.g = v5;
v5.__defineGetter__("p", g);
v5.p;
