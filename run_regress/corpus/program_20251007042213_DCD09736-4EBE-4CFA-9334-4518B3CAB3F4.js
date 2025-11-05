function A() {
    function f3() {
    }
    function f4() {
    }
    Object.defineProperty(this, "x", { set: f3, get: f4 });
    function f8() {
        return 1;
    }
    this.a = f8;
}
function B() {
    A.apply(this);
    function f14() {
        return 2;
    }
    this.a = f14;
}
const v17 = new B();
var b = v17;
Object.getOwnPropertyDescriptor(b, "a").enumerable;
