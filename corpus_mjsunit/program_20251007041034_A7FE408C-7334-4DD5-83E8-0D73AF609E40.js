var obj1 = { prop1: 0 };
var index = 0;
function f6() {
}
function f7(a8) {
}
Object.defineProperty(obj1, "someProp", { get: f6, set: f7 });
function f12() {
    obj1[index--] = 1;
    return obj1.prop1;
}
var func0 = f12;
function f17(a18) {
    for (let i20 = 0; i20 < 65535; i20++) {
        a18.prop1 = func0();
    }
}
var func1 = f17;
print("Pass");
