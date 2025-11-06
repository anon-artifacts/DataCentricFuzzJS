var log;
function b(a3) {
    log += "b";
    return "B";
}
function g() {
    log = "";
    function f8() {
        log += "a";
        return "A";
    }
    var a = { toString: f8 };
    (("[" + a) + b()) + "]";
}
for (let i22 = 0; i22 < 1000; ++i22) {
    g();
}
