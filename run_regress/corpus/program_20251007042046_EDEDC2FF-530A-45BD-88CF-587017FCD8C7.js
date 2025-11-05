if (typeof gczeal === "function") {
    gczeal(2);
}
function f6() {
    return 42;
}
const t6 = Function.prototype;
t6.prototype = f6;
try {
    foo(Function);
} catch(e12) {
}
function f13() {
    return 42;
}
const t15 = Function.prototype;
t15.prototype = f13;
