function s(a1) {
    a1.x = 1;
}
function s_strict(a4) {
    'use strict';
    a4.x = 1;
}
function c(a7) {
    return { __proto__: a7 };
}
var p = {};
var o1 = c(p);
var o2 = c(p);
var o3 = c(p);
var o4 = c(p);
p.y = 1;
delete p.y;
p.x = 5;
s(o1);
s(o2);
s_strict(o1);
s_strict(o2);
Object.defineProperty(p, "x", { writable: false });
o3.x = 20;
o3.x;
s(o4);
o4.x;
