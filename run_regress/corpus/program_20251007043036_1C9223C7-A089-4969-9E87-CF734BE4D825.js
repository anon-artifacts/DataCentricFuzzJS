function foo() {
    var x = {};
    function f3() {
        return 0;
    }
    x.__proto__ = f3;
    return x;
}
var a = foo();
var b = foo();
a.__proto__ === b.__proto__;
