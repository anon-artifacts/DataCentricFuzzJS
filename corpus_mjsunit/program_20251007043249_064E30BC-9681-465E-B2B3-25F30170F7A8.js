var a = ["A",,"B","C","D"];
var normalArrayElementDesc = Object.getOwnPropertyDescriptor(a, 0);
function f11() {
    return "F";
}
var getterDesc = { get: f11, set: undefined, enumerable: true, configurable: false };
Object.defineProperty(a, 1, getterDesc);
Object.getOwnPropertyDescriptor(a, 1);
for (let i24 = 0; i24 < a.length; i24++) {
    if ((i24 !== 1) && a.hasOwnProperty(i24)) {
        normalArrayElementDesc.value = a[i24];
        Object.getOwnPropertyDescriptor(a, i24);
    }
}
