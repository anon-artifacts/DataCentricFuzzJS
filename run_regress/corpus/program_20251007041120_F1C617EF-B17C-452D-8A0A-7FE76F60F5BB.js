function bailout() {
    throw "bailout";
}
var global;
function foo(a5, a6) {
    var a = a5 + 1;
    var b = a5 + 2;
    global = true;
    a6();
    return a;
}
function f20() {
}
foo(1, f20);
