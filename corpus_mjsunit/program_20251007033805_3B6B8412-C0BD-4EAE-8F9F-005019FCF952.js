function assertSame(a1, a2) {
    if (a2 === a1) {
        if ((a1 !== 0) || ((1 / a1) == (1 / a2))) {
            return;
        }
    }
    return;
}
function foo(a13) {
    return a13.bar;
}
function getter1() {
}
const v18 = {};
var o1 = Object.defineProperty(v18, "bar", { get: getter1 });
foo(o1);
foo(o1);
function getter2() {
}
const v29 = {};
var o2 = Object.defineProperty(v29, "bar", { get: getter2 });
foo(o2);
foo(o2);
