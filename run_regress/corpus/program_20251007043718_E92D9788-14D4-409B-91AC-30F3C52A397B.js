function f0(a1, a2) {
    function foo() {
        this.constructor = a1;
    }
    foo.prototype = a2.prototype;
    const v6 = new foo();
    a1.prototype = v6;
}
var extend = f0;
function f9(a10) {
    function f11() {
    }
    var Car = f11;
    extend(Car, a10);
}
var Car = f9(Object);
