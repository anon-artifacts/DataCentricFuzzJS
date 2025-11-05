function eq(a1, a2) {
    return a1 == a2;
}
function eq_strict(a5, a6) {
    return a5 === a6;
}
function le(a9, a10) {
    return a9 <= a10;
}
function lt(a13, a14) {
    return a13 < a14;
}
function ge(a17, a18) {
    return a17 >= a18;
}
function gt(a21, a22) {
    return a21 > a22;
}
function test(a25, a26) {
    eq(a25, a25);
    eq(a26, a26);
    eq(a25, a26);
    eq_strict(a25, a25);
    eq_strict(a26, a26);
    eq_strict(a25, a26);
    le(a25, a25);
    le(a25, a26);
    le(a26, a25);
    lt(a25, a25);
    lt(a25, a26);
    lt(a26, a25);
    ge(a25, a25);
    ge(a25, a26);
    ge(a26, a25);
    gt(a25, a25);
    gt(a25, a26);
    gt(a26, a25);
}
function O() {
}
function f46() {
}
const t42 = O.prototype;
t42.t = f46;
const v48 = new O();
var obj1 = v48;
const v50 = new O();
var obj2 = v50;
test(obj1, obj2);
obj1.x = 1;
test(obj1, obj2);
