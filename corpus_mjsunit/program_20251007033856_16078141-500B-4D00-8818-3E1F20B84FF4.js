var slow = {};
var p = {};
slow.__proto__ = p;
slow.x = 10;
slow.y = 10;
Object.defineProperty(p, "x", { writable: false, value: 5 });
function c(a13) {
    return { __proto__: a13 };
}
function s(a16) {
    a16.x = 1;
    return 1;
}
function s_strict(a19) {
    'use strict';
    a19.x = 1;
}
var o1 = c(slow);
var o2 = c(slow);
var o1_strict = c(slow);
var o2_strict = c(slow);
var o3 = c(slow);
var o4 = c(slow);
delete slow.y;
s(o1);
s(o2);
s_strict(o1_strict);
s_strict(o2_strict);
delete slow.x;
o3.x = 20;
o3.x;
s(o4);
o4.x;
