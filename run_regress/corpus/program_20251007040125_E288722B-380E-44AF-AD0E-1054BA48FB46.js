function Foo(a1, a2, a3) {
    this.x = a1 + a2;
    this.y = a3;
}
updated = false;
function f9() {
    const v11 = Object.prototype;
    function f13() {
        updated = true;
    }
    Object.defineProperty(v11, "y", { set: f13 });
}
var o = { valueOf: f9 };
function Bar() {
}
const v23 = new Foo(o, 1, 2);
Bar.prototype = v23;
Bar.prototype.y;
