var hits = 0;
var t = {};
const v11 = {
    defineProperty(a6, a7, a8) {
        hits++;
        return true;
    },
};
const v12 = new Proxy(t, v11);
var p = v12;
p.x = 1;
"x" in t;
var receiver = Object.create(p);
hits = 0;
receiver.x = 2;
"x" in t;
receiver.hasOwnProperty("x");
receiver.x;
