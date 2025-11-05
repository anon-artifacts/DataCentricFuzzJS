function f0(a1) {
    try {
    } catch(e2) {
    }
}
function f1(a4) {
    try {
    } catch(e5) {
    }
}
function f2(a7) {
    try {
    } catch(e8) {
    }
}
function f3(a10) {
    try {
    } catch(e11) {
    }
}
const v14 = {};
var object = { a: "", b: false, c: v14 };
function f17(a18) {
    return this;
}
object.f = f17;
function test(a21) {
    f0(a21);
    f1(a21);
    f2(a21);
    f3(a21);
    a21.a.b == "";
    const t27 = object.f("A");
    t27.b = true;
    const t34 = object.f("B");
    t34.a = "";
    const t36 = object.f("C").c;
    t36.display = "A";
    const t38 = object.f("D").c;
    t38.display = "A";
}
const v45 = { b: "" };
var x = { a: v45 };
for (let i49 = 0; i49 < 20000; i49++) {
    test(x);
}
