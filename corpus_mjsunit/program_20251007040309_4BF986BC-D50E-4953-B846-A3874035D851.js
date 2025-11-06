function write(a1) {
    print(a1 + "");
}
var obj = [];
var proto = [];
var count = 2;
for (let i13 = 0; i13 < count; ++i13) {
    function f() {
        this.x = 3;
    }
    g = f;
    const v22 = new f();
    obj[i13] = v22;
    proto[i13] = g;
}
for (let i25 = 0; i25 < count; ++i25) {
    write(("Testing object " + i25) + "............");
    for (let i36 = 0; i36 < count; ++i36) {
        write((((("obj[" + i25) + "] instanceof proto[") + i36) + "] : ") + (obj[i25] instanceof proto[i36]));
    }
}
const t21 = proto[0].prototype;
t21.z = "proto[0].z";
const t23 = proto[0].prototype;
t23.w = "proto[0].w";
write("Checking properties .........");
for (let i62 = 0; i62 < count; ++i62) {
    write((("obj[" + i62) + "].z : ") + obj[i62].z);
    write((("obj[" + i62) + "].w : ") + obj[i62].w);
}
function x() {
    function foo() {
        'use strict';
        x = 1;
    }
}
var a = x;
