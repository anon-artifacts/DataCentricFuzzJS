var o = {};
var count = 0;
function f5() {
    count++;
    return 100;
}
Object.defineProperty(o, "x", { get: f5 });
function load(a12, a13) {
    a12.x;
    return 1 + a13.x_tagged;
}
var deopt = false;
const v20 = {};
var o2 = { x_tagged: v20 };
o2.x_tagged = 1;
load({ x: 1 }, o2);
load({ x: 1 }, o2);
print(load(o, o2));
o2.x_tagged = true;
print(load(o, o2));
