function ArrayCallback(a1) {
    this.state = a1;
    return a1;
}
function f3(a4, a5, a6) {
    return this.state ? true : a4 == a4.toUpperCase();
}
const t7 = ArrayCallback.prototype;
t7.isUpperCase = f3;
strings = ["hello","Array","WORLD"];
const v20 = new ArrayCallback(false);
obj = v20;
strings.filter(obj.isUpperCase, obj);
const v27 = new ArrayCallback(true);
strings.filter((obj = v27).isUpperCase, obj);
obj.__proto__ = {};
