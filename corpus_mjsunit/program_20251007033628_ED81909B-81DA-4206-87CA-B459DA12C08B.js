function Counter() {
    this.value = 0;
}
const v3 = Counter.prototype;
function f5() {
    return this.value;
}
function f8(a9) {
    this.value = a9;
}
Object.defineProperty(v3, "count", { get: f5, set: f8 });
const v14 = new Counter();
var obj = v14;
function bummer() {
    let v17 = obj.count;
    v17++;
    return obj.count;
}
bummer();
bummer();
bummer();
bummer();
bummer();
bummer();
