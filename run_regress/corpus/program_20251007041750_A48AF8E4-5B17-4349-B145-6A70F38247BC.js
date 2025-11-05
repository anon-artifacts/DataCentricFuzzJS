function f0() {
    var obj0 = 1;
    obj0.b = obj0.b & 1;
    print("obj0.b = " + (obj0.b | 0));
}
f0();
function f(a15) {
    return a15;
}
function foo() {
    var obj = {};
    obj.x = 5;
    print((obj = f(obj.x)).x);
}
foo();
