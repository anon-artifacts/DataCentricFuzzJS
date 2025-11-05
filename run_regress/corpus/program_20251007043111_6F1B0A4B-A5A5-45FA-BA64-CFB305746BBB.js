var array = [];
const v4 = new Proxy(array, {});
const v6 = new Proxy(v4, {});
var proxy = v6;
function f8() {
}
var Ctor = f8;
var result;
function f12() {
}
array.constructor = f12;
const t11 = array.constructor;
t11[Symbol.species] = Ctor;
Array.prototype.slice.call(proxy);
