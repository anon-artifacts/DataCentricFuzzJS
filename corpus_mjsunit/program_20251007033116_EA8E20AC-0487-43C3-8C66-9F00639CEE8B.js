var o = {};
function f3() {
    throw "bail";
}
Object.defineProperty(o, "length", { get: f3 });
var a = [];
function f12() {
    throw "bail";
}
Object.defineProperty(a, "0", { get: f12 });
