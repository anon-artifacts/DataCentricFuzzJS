function f0() {
}
function bogusConstruct(a2) {
    return 4;
}
function bogusConstructUndefined(a5) {
}
var handler = { construct: bogusConstruct };
function callable() {
}
const v10 = new Proxy(callable, handler);
var p = v10;
function f12() {
    try { new p(); } catch (e) {}
}
f12();
handler.construct = bogusConstructUndefined;
function f17() {
    try { new p(); } catch (e) {}
}
f17();
if (typeof f0 === "function") {
    f0(0, 0, "OK");
}
