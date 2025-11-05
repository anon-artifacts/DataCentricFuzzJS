function f() {
    var arguments_ = arguments;
    if (undefined) {
        while (true) {
            arguments_[0];
        }
    } else {
        return arguments_[0];
    }
}
f(0);
f(0);
f(1);
function g() {
    var a = arguments;
    return a.length;
}
g(1);
g(1);
g(1);
