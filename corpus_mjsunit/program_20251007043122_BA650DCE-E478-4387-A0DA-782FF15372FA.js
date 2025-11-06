const v1 = Object.prototype;
function f3() {
}
Object.defineProperty(v1, "x", { set: f3 });
var obj = {};
for (let i9 = 0; i9 < 100; ++i9) {
    obj.x = 1;
    delete obj.x;
}
