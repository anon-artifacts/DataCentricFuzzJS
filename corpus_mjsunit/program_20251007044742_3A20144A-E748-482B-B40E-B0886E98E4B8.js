function f(a1, a2, a3) {
    var args = arguments;
    if (a1) {
        args = a2;
    }
    print(args);
    args.length;
}
f(false, 0, 3);
f(false, 0, 3);
f(false, 0, 3);
var a = [1,2,3];
a.x = 9;
f(true, a, 3);
