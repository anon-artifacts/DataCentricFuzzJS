const v1 = Array.prototype;
var o = { __proto__: v1, 0: "x" };
function boomer() {
    return 0;
}
Object.defineProperty(o, "length", { get: boomer, set: boomer });
Object.seal(o);
function f12() {
    o.push(1);
}
f12();
o.length;
o[0];
function f20() {
    o.unshift(2);
}
f20();
o.length;
o[0];
