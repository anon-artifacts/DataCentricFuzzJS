var array = [];
function push(a3, a4) {
    a3.push(a4);
}
push(array, 0);
push(array, 1);
push(array, 2);
push(array, 3);
var v = 0;
const v17 = Array.prototype;
function f19() {
    return 100;
}
function f21(a22) {
    v = a22;
}
Object.defineProperty(v17, "4", { get: f19, set: f21 });
push(array, 4);
array.length;
array[4];
