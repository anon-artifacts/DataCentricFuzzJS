function f() {
    const v1 = (a2) => {
        return Error();
    };
    return g(v1);
}
function g(a8) {
    return a8();
}
var err = f(1, 2);
var lines = err.stack.split("\n");
lines[0].endsWith(":1:33");
lines[1].endsWith(":2:24");
