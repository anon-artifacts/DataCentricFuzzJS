var v1 = [];
var v2 = [];
v1.__proto__ = v2;
function f() {
    var a = [];
    for (let i8 = 0; i8 < 2; i8++) {
        a.push([]);
        a = v2;
    }
}
f();
f();
