function lt(a1, a2) {
    return a1 < a2;
}
function gt(a5, a6) {
    return a5 > a6;
}
function eq(a9, a10) {
    return a9 == a10;
}
function eq_strict(a13, a14) {
    return a13 === a14;
}
function test(a17, a18, a19, a20) {
    eq(a17, a17);
    eq(a18, a18);
    eq(a17, a18);
    eq_strict(a17, a17);
    eq_strict(a18, a18);
    eq_strict(a17, a18);
    lt(a17, a18);
    gt(a17, a18);
    lt(a18, a17);
    gt(a18, a17);
}
function f31() {
    return "1";
}
var obj1 = { toString: f31 };
function f35() {
    return "2";
}
var obj2 = { toString: f35 };
var less = obj1 < obj2;
var greater = obj1 > obj2;
test(obj1, obj2, less, greater);
test(obj1, obj2, less, greater);
test(obj1, obj2, less, greater);
test(obj1, obj2, less, greater);
test(obj1, obj2, less, greater);
obj1.x = 1;
test(obj1, obj2, less, greater);
obj2.y = 2;
test(obj1, obj2, less, greater);
var obj1 = { test: 3 };
var obj2 = { test2: 3 };
var less = obj1 < obj2;
var greater = obj1 > obj2;
test(obj1, obj2, less, greater);
test(obj1, obj2, less, greater);
test(obj1, obj2, less, greater);
test(obj1, obj2, less, greater);
test(obj1, obj2, less, greater);
function f67() {
    return "1";
}
obj1.toString = f67;
var less = obj1 < obj2;
var greater = obj1 > obj2;
test(obj1, obj2, less, greater);
test(obj1, obj2, less, greater);
function f75() {
    return "2";
}
obj2.toString = f75;
var less = true;
var greater = false;
test(obj1, obj2, less, greater);
obj2.y = 2;
test(obj1, obj2, less, greater);
