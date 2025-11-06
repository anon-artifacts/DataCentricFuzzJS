function f0() {
    var s = "__proto__";
    arguments[s];
    Object.prototype;
}
f0();
const v9 = Object.prototype;
function f11() {
    this.bar = 42;
    return 41;
}
Object.defineProperty(v9, "foo", { get: f11 });
function f17() {
    var s = "foo";
    arguments[s];
    arguments[s = "bar"];
    "bar" in Object.prototype;
}
f17();
