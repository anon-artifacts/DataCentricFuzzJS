function f() {
    return f.x;
}
f.__proto__ = null;
f.prototype = "";
f();
f();
f();
