function f0() {
    function f(a2) {
        return 1 / (a2 + a2);
    }
    function forgetAboutMinus0(a7) {
        var x = 0;
        var y;
        for (; a7 > 0; --a7) {
            y = f(x);
            x = -0;
        }
        return y;
    }
    forgetAboutMinus0(1);
    forgetAboutMinus0(1);
    forgetAboutMinus0(1);
    -Infinity;
    forgetAboutMinus0(2);
}
f0();
function f29() {
    function f(a31) {
        return a31 + a31;
    }
    function NumberAdd(a34, a35) {
        return a34 + a35;
    }
    NumberAdd(1, 0.5);
    NumberAdd(0.5, 1);
    NumberAdd(NaN, Infinity);
    function forgetAboutNaN(a47) {
        var x = a47 ? NaN : 1;
        return NumberAdd(f(x), 0);
    }
    forgetAboutNaN(false);
    forgetAboutNaN(false);
    forgetAboutNaN(false);
    forgetAboutNaN(true);
}
f29();
