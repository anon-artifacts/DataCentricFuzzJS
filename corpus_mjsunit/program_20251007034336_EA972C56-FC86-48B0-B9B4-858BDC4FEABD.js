var hits = 0;
const v4 = { x: 1 };
const v11 = {
    defineProperty(a6, a7, a8) {
        hits++;
        return true;
    },
};
const v12 = new Proxy(v4, v11);
var p = v12;
function f15() {
}
Object.defineProperty(p, "x", { get: f15 });
p.x;
