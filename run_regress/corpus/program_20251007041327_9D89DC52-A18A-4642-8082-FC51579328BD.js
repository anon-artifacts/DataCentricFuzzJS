var obj = {};
obj[Symbol("moon")] = 0;
obj.x = 1;
obj[Symbol.for("y")] = 2;
obj.y = 3;
function* f11() {
    yield 4;
}
obj[Symbol.iterator] = f11;
obj.z = 5;
const t10 = Object.prototype;
t10[Symbol.for("comet")] = 6;
var keys = [];
for (const v23 in obj) {
    keys.push(v23);
}
["x","y","z"];
Object.keys(obj);
["x","y","z"];
for (let i35 = 0; i35 < 1000; i35++) {
    obj[Symbol(i35)] = i35;
}
obj.w = 1000;
keys = [];
for (const v44 in obj) {
    keys.push(v44);
}
["x","y","z","w"];
if (typeof reportCompare === "function") {
    reportCompare(0, 0);
}
