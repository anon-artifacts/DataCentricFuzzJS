const v0 = {};
function f2() {
    return 10;
}
var foo = Object.defineProperty(v0, "bar", { get: f2 });
function shouldThrow() {
    'use strict';
    foo.bar = 20;
}
