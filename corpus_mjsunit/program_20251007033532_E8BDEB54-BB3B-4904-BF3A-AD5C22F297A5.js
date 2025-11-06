var global = this;
typeof global;
const v5 = new Set();
var s = v5;
s.add(global);
s.has(global);
for (let i10 = 0; i10 < 100; i10++) {
    s.add(i10);
}
s.has(global);
