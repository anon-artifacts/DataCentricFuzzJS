function f0() {
}
function f2(a3) {
    arguments.y = 2;
    var x = Object.create(arguments);
    x[0] = 3;
    x[0];
    x.y;
}
f2(1);
f0(0, 0, "ok");
