function f() {
    var o = {};
    o.a = 1;
}
function g() {
    function f5() {
    }
    var o = { ["a"]: f5 };
    f();
}
f();
f();
g();
