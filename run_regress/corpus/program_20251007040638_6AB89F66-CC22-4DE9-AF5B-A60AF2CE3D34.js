var x = {};
function f2() {
    return 42;
}
var getter = f2;
function f5(a6) {
}
var setter = f5;
x.__defineGetter__(0, getter);
x.__defineSetter__(0, setter);
Object.getOwnPropertyDescriptor(x, 0).value;
Object.getOwnPropertyDescriptor(x, 0).get;
Object.getOwnPropertyDescriptor(x, 0).set;
