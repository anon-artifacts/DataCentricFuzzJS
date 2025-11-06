function Bar() {
    this.foo = 5;
}
const v3 = Bar.prototype;
function f5() {
    return this.foo;
}
function f8(a9) {
    this.foo = a9;
}
Object.defineProperty(v3, "data", { get: f5, set: f8, configurable: true });
function test1() {
    const v16 = new Bar();
    const bar = v16;
    function getWithGetter() {
        return bar.data;
    }
    let sum = 0;
    sum += getWithGetter();
    sum += getWithGetter();
    Object.defineProperty(bar, "data", { value: 3 });
    sum += getWithGetter();
    console.log(sum);
}
test1();
