this.__proto__ = null;
this.x = 10;
delete this.x;
function s(a7) {
    a7.x = 1;
    return 1;
}
function s_strict(a10) {
    'use strict';
    a10.x = 1;
    return 1;
}
function c() {
    var o = { __proto__: this };
    return o;
}
var o1 = c();
var o2 = c();
var o1_strict = c();
var o2_strict = c();
var o3 = c();
var o4 = c();
s(o1);
s(o2);
s_strict(o1_strict);
s_strict(o2_strict);
Object.defineProperty(this, "x", { writable: false, configurable: true });
o3.x = 1;
o3.x;
s(o4);
o4.x;
