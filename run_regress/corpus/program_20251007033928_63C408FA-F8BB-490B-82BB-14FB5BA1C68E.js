var obj = {};
function f3() {
    return "42";
}
Object.defineProperty(obj, "x", { get: f3, configurable: false });
obj.x;
Object.defineProperty(obj, "x", {});
obj.x;
