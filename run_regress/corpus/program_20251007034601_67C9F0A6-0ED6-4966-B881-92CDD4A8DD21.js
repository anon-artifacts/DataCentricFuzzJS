function assertEqual(a1, a2) {
}
var a0 = [,,,,,,,,,,,,,];
function f6() {
    return a0;
}
const v8 = Symbol.species;
const v9 = { [v8]: f6 };
const t8 = Array.prototype;
t8.constructor = v9;
var a1 = [1,2,3,4];
var a2 = a1.concat(a0);
