const v1 = new Uint8ClampedArray();
x = v1;
x.__proto__ = {};
function f7() {
    return x.length;
}
Object.defineProperty(this, "y", { get: f7 });
