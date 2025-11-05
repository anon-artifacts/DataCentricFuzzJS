function f0() {
    return [];
}
var Ctor = f0;
var a = ["one","two","three"];
a.constructor = {};
const t6 = a.constructor;
t6[Symbol.species] = Ctor;
function f12() {
    return true;
}
a.filter(f12);
