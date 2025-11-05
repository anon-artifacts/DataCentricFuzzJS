var aaa;
function f() {
    function g(a4) {
        if (a4) {
            aaa = 22;
        }
    }
    g(10);
    function h() {
        aaa = 22;
    }
    for (let i11 = 0; i11 < 70; i11++) {
        h();
    }
}
f();
x = 0;
function setX(a23) {
    x = a23;
}
for (let i26 = 0; i26 < 70; i26++) {
    setX(i26);
}
y = 3.14;
y = true;
y = [];
function setY(a42) {
    y = a42;
}
for (let i45 = 0; i45 < 70; i45++) {
    setY([1]);
}
setY([1,2,3]);
y.length;
var z = 10;
function testNonWritable() {
    function g() {
        z = 11;
    }
    for (let i68 = 0; i68 < 70; i68++) {
        g();
    }
    Object.defineProperty(this, "z", { value: 1234, writable: false });
    g();
}
testNonWritable();
