var obj1 = {};
function f3() {
    return this._prop0;
}
function f6(a7) {
    this._prop0 = a7;
}
Object.defineProperty(obj1, "prop0", { get: f3, set: f6, configurable: true });
arrObj0 = [];
var ret;
function foo(a18, a19) {
    a18.length;
    a19.prop0 = 1;
    for (let i23 = 0; i23 < 3; i23++) {
        a19.prop0 = i23;
        ret = a19.prop0;
    }
}
foo(arrObj0, obj1);
print(ret);
foo(arrObj0, obj1);
print(ret);
foo(arrObj0, obj1);
print(ret);
