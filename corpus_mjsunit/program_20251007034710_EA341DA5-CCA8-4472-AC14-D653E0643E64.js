o = {};
function f3() {
    throw 42;
}
o.__defineGetter__("foo", f3);
function f() {
    try {
        throw 42;
    } finally {
        try {
            o.foo;
        } catch(e10) {
        }
        return;
    }
}
f();
