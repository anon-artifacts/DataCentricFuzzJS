var expected = "22,202,99;202,99,22;99,22,202;22,202,99;202,99,22;99,22,202;22,202,99;202,99,22;99,22,202;";
var actual = "";
var protoB = { a: 11, b: 22, c: 33 };
function B() {
}
B.prototype = protoB;
var protoC = { a: 101, b: 202, c: 303 };
function C() {
}
C.prototype = protoC;
function f() {
    const v17 = new B();
    var o1 = v17;
    const v19 = new C();
    var o2 = v19;
    const v21 = new C();
    var o3 = v21;
    o3.b = 99;
    var oa = [o1,o2,o3];
    for (let i27 = 0; i27 < 9; ++i27) {
        var i1 = i27 % 3;
        var i2 = (i27 + 1) % 3;
        var i3 = (i27 + 2) % 3;
        actual += oa[i1].b + ",";
        actual += oa[i2].b + ",";
        actual += oa[i3].b + ";";
    }
}
f();
