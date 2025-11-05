this.x = 0;
var p = {};
Object.defineProperty(p, "x", { writable: false, value: 5 });
this.__proto__ = p;
function s(a12) {
    a12.x = 1;
}
function s_strict(a15) {
    'use strict';
    a15.x = 1;
}
function c(a18) {
    return { __proto__: a18 };
}
var o1 = c(this);
var o2 = c(this);
s(c(this));
s(c(this));
s_strict(c(this));
s_strict(c(this));
delete this.x;
o1.x = 20;
o1.x;
s(o2);
o2.x;
