const v1 = new Object();
var a = v1;
function f3(a4) {
    for (__i = 0; __i < 1; ++__i) {
        print("Pass");
    }
}
a.push = f3;
a.push(1);
