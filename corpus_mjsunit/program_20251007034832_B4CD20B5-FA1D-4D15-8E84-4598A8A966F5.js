function f0() {
    function f1() {
        this.initialize.apply(this, arguments);
    }
    return f1;
}
var Class = { create: f0 };
var Bar = Class.create();
function f11() {
}
Bar.prototype = { initialize: f11 };
var Foo = Class.create();
function f15() {
    const v16 = new Bar();
    this.bar = v16;
}
Foo.prototype = { initialize: f15 };
function f() {
    for (let i21 = 0; i21 < 100; i21++) {
        const v27 = new Foo();
        var foo = v27;
    }
}
f();
