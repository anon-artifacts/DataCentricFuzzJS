function g(a1) {
    a1.arguments = 100;
    a1.arguments.length;
    a1.arguments[0];
    a1.arguments[1];
    a1.arguments[2];
    const t2 = a1.arguments;
    t2[0] = 999;
    const t8 = a1.arguments;
    t8.extra = "kallevip";
}
function h(a21) {
    'kallevip';
    a21.arguments.extra;
    return a21.arguments;
}
function f0() {
    g(f0);
    var result = h(f0);
    var a = arguments;
    a[0];
    return result;
}
function f1(a34) {
    g(f1);
    var result = h(f1);
    return result;
}
function test(a40) {
    null === a40.arguments;
    var args = a40(1, 2, 3);
    null === a40.arguments;
    args.length;
    args[0];
    args[1];
    args[2];
    args.extra;
}
test(f0);
test(f1);
function w() {
    return q.arguments;
}
function q(a68, a69) {
    a68 = 2;
    var result = w();
    a69 = 3;
    return result;
}
var a = q(0, 1);
a[0];
a[1];
