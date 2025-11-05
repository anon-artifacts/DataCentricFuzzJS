function f0() {
}
function strictThis() {
    'use strict';
    return this;
}
function flat(a4) {
    function h() {
        return a4();
    }
    return h;
}
const t12 = flat(strictThis);
t12();
function upvar(a11) {
    function h() {
        return a11();
    }
    return h();
}
upvar(strictThis);
var obj = { f: strictThis };
with (obj) {
    function g() {
        return obj.f();
    }
    g();
}
f0(true, true);
