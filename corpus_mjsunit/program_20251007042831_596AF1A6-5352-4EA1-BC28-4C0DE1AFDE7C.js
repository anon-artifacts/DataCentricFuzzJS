function f0() {
    function f() {
        arguments.length = -5;
        Array.prototype.slice.call(arguments);
    }
    f("a");
}
f0();
function f13() {
    function f() {
        arguments.length = 2.3;
        Array.prototype.slice.call(arguments);
    }
    f("a");
}
f13();
function f25() {
    function f(a27) {
        arguments.length = -5;
        Array.prototype.slice.call(arguments);
    }
    f("a");
}
f25();
function f39() {
    function f(a41) {
        arguments.length = 2.3;
        Array.prototype.slice.call(arguments);
    }
    f("a");
}
f39();
