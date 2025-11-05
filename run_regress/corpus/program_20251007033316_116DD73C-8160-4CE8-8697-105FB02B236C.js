function f0() {
}
function f1() {
    'use strict';
    return [this.m,this];
}
const t6 = String.prototype;
t6.m = f1;
var f = f1;
var a = ("s").m();
a[0];
a[1];
f0(true, true);
