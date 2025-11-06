function f0() {
}
var desc = { get: undefined, set: undefined, configurable: true, enumerable: true };
var obj = Object.defineProperty({}, "prop", desc);
try { obj.toSource(); } catch (e) {}
if (typeof f0 === "function") {
    f0(0, 0);
}
