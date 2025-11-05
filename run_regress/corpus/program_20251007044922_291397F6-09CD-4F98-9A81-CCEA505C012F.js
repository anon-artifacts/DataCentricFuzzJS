function testPrimitiveConstructorPrototype() {
    function f1() {
    }
    var f = f1;
    f.prototype = false;
    for (let i5 = 0; i5 < 5; ++i5) {
        new f();
    }
    return "ok";
}
testPrimitiveConstructorPrototype();
