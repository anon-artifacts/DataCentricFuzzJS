function f0() {
}
x = [];
function f5() {
    f0.caller;
}
Object.defineProperty(this, "y", { get: f5 });
function f12() {
    y?.[13];
}
Object.defineProperty(x, 3, { get: f12 });
function f17() {
    try { x.shift(); } catch (e) {}
}
f17();
