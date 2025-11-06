var proto = {};
var obj = Object.create(proto);
Object.defineProperty(proto, "x", { get: decodeURI, configurable: true });
function f11() {
    return this.x;
}
Object.defineProperty(obj, "z", { get: f11 });
obj.z;
const v20 = Math.sin;
Object.defineProperty(proto, "x", { get: v20, configurable: false });
obj.z;
