const v1 = Object.prototype;
function f3() {
    let v5 = this.foo;
    v5++;
    return 23;
}
Object.defineProperty(v1, 1, { get: f3 });
([1,,]).pop();
