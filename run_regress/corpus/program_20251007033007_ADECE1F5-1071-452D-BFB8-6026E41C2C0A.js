function TestInlineOneParam(a1, a2) {
    a1.f(a2);
    var x = a1.f(a2);
    a1.f(a2);
    if (!a1.f(a2)) {
    }
}
var obj = { x: 42 };
var o1 = {};
function f17(a18) {
    return a18.x;
}
o1.f = f17;
for (let i21 = 0; i21 < 5; i21++) {
    TestInlineOneParam(o1, obj);
}
TestInlineOneParam(o1, obj);
const v29 = o1.f;
const v30 = { f: v29 };
TestInlineOneParam(v30, { x: 42 });
function TestInlineTwoParams(a35, a36) {
    var y = 43;
    a35.h(y, y);
    var x = a35.h(a36, y);
    a35.h(y, a36);
    if (!a35.h(a36, y)) {
    }
    a35.h(y + 1, y + 1);
    var x = a35.h(a36 + 1, y + 1);
    a35.h(y + 1, a36 + 1);
    if (!a35.h(a36 + 1, y + 1)) {
    }
}
var o2 = {};
function f75(a76, a77) {
    return a76 < a77;
}
o2.h = f75;
for (let i80 = 0; i80 < 5; i80++) {
    TestInlineTwoParams(o2, 42);
}
TestInlineTwoParams(o2, 42);
const v90 = o2.h;
TestInlineTwoParams({ h: v90 }, 42);
