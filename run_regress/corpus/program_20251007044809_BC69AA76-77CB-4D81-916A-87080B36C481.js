function f0() {
}
const t2 = Array.prototype;
t2.myfunc = f0;
const t4 = Array.prototype;
t4[10] = 42;
const t6 = Array.prototype;
t6.length = 3000;
var obj = { name: "n1" };
try {
    obj = Object.freeze(obj);
} catch(e12) {
}
