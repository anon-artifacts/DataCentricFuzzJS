var hits;
const v3 = {};
const v13 = {
    set(a5, a6, a7, a8) {
        hits++;
    },
};
const v14 = new Proxy(v3, v13);
var a = v14;
const v17 = new Proxy(a, {});
var b = v17;
hits = 0;
b.prop = 3;
