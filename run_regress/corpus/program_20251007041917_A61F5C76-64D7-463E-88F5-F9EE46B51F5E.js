function f() {
    'use strict';
    let v4;
    try { v4 = undefined(0, 0); } catch (e) {}
    return v4;
}
function g() {
    return f();
}
g();
g();
g();
