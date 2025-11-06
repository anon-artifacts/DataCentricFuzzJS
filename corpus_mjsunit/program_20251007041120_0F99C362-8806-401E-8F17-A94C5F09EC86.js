function f() {
    return 2;
}
function g(a3) {
    with (a3) {
        function f4() {
            return 4;
        }
        var f = f4;
    }
    return f();
}
g({});
