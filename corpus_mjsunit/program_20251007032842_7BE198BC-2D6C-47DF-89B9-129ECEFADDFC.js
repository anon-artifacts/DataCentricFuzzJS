function f1() {
    g(f1);
}
function f2(a4) {
    var a = arguments;
    a4++;
    g(f2);
}
function f3(a11) {
    var a = arguments;
    function f14() {
        a11++;
    }
    f14();
    g(f3);
}
function g(a20) {
    'object';
    typeof a20.arguments;
    a20.arguments === a20.arguments;
    a20.arguments.length;
    a20.arguments[0];
    a20.arguments[1];
    a20.arguments[2];
}
f1(1, 2, 3);
f2(1, 2, 3);
f3(1, 2, 3);
