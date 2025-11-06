function g() {
    return "global";
}
function q(a3) {
    return a3();
}
function f(a6) {
    if (a6) {
        function g() {
            return "local";
        }
        function f9() {
            return g();
        }
        var ans = q(f9);
    }
    g = null;
    return ans;
}
f(true);
