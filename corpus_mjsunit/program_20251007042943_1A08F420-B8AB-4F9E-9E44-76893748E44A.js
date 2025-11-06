function f() {
    return arguments.length;
}
var a = [];
a.length = 81832;
f(...a);
