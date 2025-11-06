function TestInlineX(a1) {
    a1.g();
    var x = a1.g();
    a1.g();
    if (!a1.g()) {
    }
}
var o2 = {};
function f13() {
    return 42;
}
o2.size = f13;
function f15() {
    return this.size();
}
o2.g = f15;
for (let i19 = 0; i19 < 5; i19++) {
    TestInlineX(o2);
}
TestInlineX(o2);
const v27 = o2.g;
const v28 = o2.size;
TestInlineX({ g: v27, size: v28 });
function TestInlineX2(a32) {
    a32.h();
    var x = a32.h();
    a32.h();
    if (!a32.h()) {
    }
}
var obj = {};
function f44() {
    return 42;
}
obj.foo = f44;
var o3 = {};
o3.v = obj;
function f48() {
    return this.v.foo();
}
o3.h = f48;
for (let i53 = 0; i53 < 5; i53++) {
    TestInlineX2(o3);
}
TestInlineX2(o3);
const v61 = o3.h;
TestInlineX2({ h: v61, v: obj });
function TestInlineFG(a65) {
    a65.h();
    var x = a65.h();
    a65.h();
    if (!a65.h()) {
    }
}
var obj = {};
function f77() {
    return 42;
}
obj.g = f77;
var o3 = {};
o3.v = obj;
function f81() {
    return this.v;
}
o3.f = f81;
function f84() {
    return this.f().g();
}
o3.h = f84;
for (let i89 = 0; i89 < 5; i89++) {
    TestInlineFG(o3);
}
TestInlineFG(o3);
const v97 = o3.h;
const v98 = o3.f;
TestInlineFG({ h: v97, f: v98, v: obj });
