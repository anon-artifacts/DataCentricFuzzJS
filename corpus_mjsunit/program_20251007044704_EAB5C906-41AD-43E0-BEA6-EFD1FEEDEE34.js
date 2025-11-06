function g(a1) {
    return a1.x;
}
const v6 = {
    set(a5) {
    },
};
Object.defineProperty(g, "x", v6);
g.prototype = 1;
g(g);
g(g);
g(g);
