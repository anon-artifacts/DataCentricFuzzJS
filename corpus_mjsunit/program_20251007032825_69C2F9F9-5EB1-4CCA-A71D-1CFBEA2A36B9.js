var a = [0,1];
function f4(a5) {
    var arr = Array(20);
    return arr;
}
const v11 = Symbol.species;
a.constructor = { [v11]: f4 };
[0,1];
Array.prototype.concat.call(a);
