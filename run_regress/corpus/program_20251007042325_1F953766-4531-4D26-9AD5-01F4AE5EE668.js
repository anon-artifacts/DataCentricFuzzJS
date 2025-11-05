function TestFunctionPrototypeSetter() {
    function f1() {
    }
    var f = f1;
    var o = { __proto__: f };
    o.prototype = 42;
    o.prototype;
    o.hasOwnProperty("prototype");
}
TestFunctionPrototypeSetter();
function TestFunctionPrototypeSetterOnValue() {
    function f12() {
    }
    var f = f12;
    var fp = f.prototype;
    const t15 = Number.prototype;
    t15.__proto__ = f;
    var n = 42;
    var o = {};
    n.prototype = o;
    n.prototype;
    f.prototype;
    Number.prototype.hasOwnProperty("prototype");
}
TestFunctionPrototypeSetterOnValue();
function TestArrayLengthSetter() {
    var a = [1];
    var o = { __proto__: a };
    o.length = 2;
    o.length;
    a.length;
    o.hasOwnProperty("length");
}
TestArrayLengthSetter();
function TestArrayLengthSetterOnValue() {
    const v44 = [1];
    const t36 = Number.prototype;
    t36.__proto__ = v44;
    var n = 42;
    n.length = 2;
    n.length;
    Number.prototype.hasOwnProperty("length");
}
TestArrayLengthSetterOnValue();
