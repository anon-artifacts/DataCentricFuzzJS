function foo(a1) {
    return a1.pop();
}
const v5 = new Array(4);
var a = v5;
foo(a);
foo(a);
foo(a);
function f14() {
    return 1;
}
Object.prototype.__defineGetter__(0, f14);
foo(a);
