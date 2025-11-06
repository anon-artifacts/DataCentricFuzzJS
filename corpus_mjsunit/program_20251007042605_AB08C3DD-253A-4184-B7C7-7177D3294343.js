function f() {
    function f1() {
        return 0;
    }
    return f1();
}
function g() {
    function h() {
        function f6() {
            return 0;
        }
        return f6();
    }
    return h();
}
f();
g();
function f13() {
}
f13();
function f15() {
    function f17() {
    }
    f17();
}
f15();
function f21() {
    function f22() {
        function f24() {
        }
        f24();
    }
    f22();
}
f21();
