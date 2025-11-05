function f2() {
    return this.y;
}
Object.defineProperty(this, "x", { get: f2 });
y = Int16Array;
var y;
