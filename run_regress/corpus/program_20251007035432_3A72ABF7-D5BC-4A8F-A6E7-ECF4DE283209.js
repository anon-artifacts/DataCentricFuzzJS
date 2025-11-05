var f = Symbol("Cocoa");
function A() {
}
A.prototype = { [f]: 42 };
function B() {
}
const v8 = new A();
B.prototype = v8;
function C() {
}
const v10 = new B();
C.prototype = v10;
function D() {
}
const v12 = new C();
D.prototype = v12;
function E() {
}
const v14 = new D();
E.prototype = v14;
function F() {
}
const v16 = new E();
F.prototype = v16;
function G() {
}
const v18 = new F();
G.prototype = v18;
function foo(a20) {
    try {
        var result = 0;
        for (let i24 = 0; i24 < 1000; ++i24) {
            result += a20[f];
        }
        return result;
    } catch(e31) {
        return 52;
    }
}
var result = 0;
for (let i36 = 0; i36 < 1000; ++i36) {
    const v42 = new G();
    result += foo(v42);
}
if (result != 42000000) {
    throw "Error: bad result: " + result;
}
