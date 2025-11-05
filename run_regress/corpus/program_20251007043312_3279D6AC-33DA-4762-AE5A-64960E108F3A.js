function f0() {
    var xSetterCalled = false;
    function MyConstructor() {
        this.x = 1;
    }
    new MyConstructor();
    new MyConstructor();
    function setter() {
        xSetterCalled = true;
    }
    Object.prototype.__defineSetter__("x", setter);
    new MyConstructor();
    if (!xSetterCalled) {
        const v18 = new Error("FAIL: 'x' setter was not called.");
        throw v18;
    }
}
f0();
function f20() {
    var xSetterCalled = false;
    function makeO() {
        var o = {};
        o.x = 1;
        return o;
    }
    makeO();
    makeO();
    function setter(a30) {
        xSetterCalled = true;
    }
    Object.prototype.__defineSetter__("x", setter);
    makeO();
    if (!xSetterCalled) {
        const v40 = new Error("FAIL: 'x' setter was not called.");
        throw v40;
    }
}
f20();
