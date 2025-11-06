function foo(a1, a2) {
    return a1 + "0123456789012";
}
foo("a");
foo("a");
foo("a");
let v13;
try { v13 = ("a").repeat(4294967295); } catch (e) {}
var a = v13;
function f15() {
    foo(a);
}
f15();
function f19() {
    foo(a);
}
f19();
foo();
