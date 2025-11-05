var t = { x: 1 };
const v18 = {
    defineProperty(a5, a6, a7) {
        hits++;
        Object.getOwnPropertyNames(a7).join(",");
        a7.value;
        return true;
    },
};
const v19 = new Proxy(t, v18);
var p = v19;
var hits = 0;
p.x = 42;
t.x;
