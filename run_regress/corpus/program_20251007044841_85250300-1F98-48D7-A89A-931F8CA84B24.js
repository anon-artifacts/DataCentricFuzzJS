function f(a1) {
    class C2 {
    }
    {
        class C3 {
        }
        function g() {
        }
        g();
    }
}
f();
function g() {
    var x = 1;
    {
        let x = 2;
        function g() {
        }
        g();
    }
}
g();
function __f_4(a17) {
    var __v_10 = a17 + 1;
    {
        let __v_10 = a17 + 3;
        function __f_6() {
        }
        __f_6();
    }
}
__f_4();
