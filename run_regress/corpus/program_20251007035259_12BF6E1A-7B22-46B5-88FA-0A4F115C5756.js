var arr = [];
function f() {
}
function g(a4, a5) {
    var a = f;
    if (a4 <= 0) {
        return f;
    }
    var t = g(a4 - 1, a5);
    function f13(a14) {
        if (a14) {
            return a;
        }
        function f15() {
            return t();
        }
        return a(a5(f15));
    }
    var r = f13;
    arr.push(r);
    return r;
}
g(80, f);
g(80, f);
g(80, f);
for (let i28 = 0; i28 < arr.length; i28++) {
    arr[i28](1);
    f();
}
