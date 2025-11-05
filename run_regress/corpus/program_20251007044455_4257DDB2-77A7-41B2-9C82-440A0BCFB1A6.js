function foo() {
}
Object.defineProperty(foo, "prototype", { value: 2 });
foo.prototype;
function bar() {
}
Object.defineProperty(bar, "prototype", { value: 2, writable: false });
bar.prototype;
function f16() {
    'use strict';
    bar.prototype = 10;
}
try { f16(); } catch (e) {}
Object.getOwnPropertyDescriptor(bar, "prototype").writable;
