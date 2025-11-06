function f0() {
}
__defineSetter__.__proto__ = f0;
__defineSetter__["prototype"];
function f4() {
}
eval.__proto__ = f4;
eval["prototype"] = {};
function f() {
    return 42;
}
f.prototype = 43;
__defineGetter__.__proto__ = f;
__defineGetter__.prototype;
__defineGetter__.prototype = "foo";
__defineGetter__.prototype;
