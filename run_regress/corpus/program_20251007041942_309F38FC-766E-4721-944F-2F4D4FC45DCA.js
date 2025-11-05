function Module() {
    'use asm';
    function if0() {
        var x = 0;
        return (((x = 0 ? 11 : 12) | 0) == 11) | 0;
    }
    function if1() {
        var x = 0;
        return (((x = 1 ? 13 : 14) | 0) == 13) | 0;
    }
    function if2() {
        var x = 0;
        return (((x = 0 ? 15 : 16) | 0) != 15) | 0;
    }
    function if3() {
        var x = 0;
        return (((x = 1 ? 17 : 18) | 0) != 17) | 0;
    }
    function if4() {
        var x = 0;
        var y = 0;
        return (y = ((x = 0 ? 19 : 20) | 0) == 19 ? 21 : 22) | 0;
    }
    function if5() {
        var x = 0;
        var y = 0;
        return (y = ((x = 1 ? 23 : 24) | 0) == 23 ? 25 : 26) | 0;
    }
    function if6() {
        var x = 0;
        var y = 0;
        var z = 0;
        return (z = ((y = ((x = 0 ? 27 : 28) | 0) == 27 ? 29 : 30) | 0) == 29 ? 31 : 32) | 0;
    }
    function if7() {
        var x = 0;
        var y = 0;
        var z = 0;
        var w = 0;
        return (w = ((z = ((y = ((x = 1 ? 33 : 34) | 0) == 33 ? 35 : 36) | 0) == 35 ? 37 : 38) | 0) == 37 ? 39 : 40) | 0;
    }
    function if8() {
        var w = 0;
        var x = 0;
        var y = 0;
        var z = 0;
        if (0) {
            x = 0 ? 43 : 44;
            y = (x | 0) == 43 ? 45 : 46;
            z = (y | 0) == 45 ? 47 : 48;
            w = (z | 0) == 47 ? 49 : 50;
        } else {
            x = 1 ? 53 : 54;
            y = (x | 0) == 53 ? 55 : 56;
            z = (y | 0) == 55 ? 57 : 58;
            w = (z | 0) == 57 ? 59 : 60;
        }
        return w | 0;
    }
    const v214 = {
        if0: if0,
        if1: if1,
        if2: if2,
        if3: if3,
        if4: if4,
        if5: if5,
        if6: if6,
        if7: if7,
        if8: if8,
    };
    return v214;
}
var m = Module();
m.if0();
m.if1();
m.if2();
m.if3();
m.if4();
m.if5();
m.if6();
m.if7();
m.if8();
function Spec0(a236, a237, a238) {
    'use asm';
    var xx = a237.a | 0;
    var yy = a237.b | 0;
    function f() {
        var x = 0;
        var y = 0;
        var z = 0;
        var w = 0;
        if (xx) {
            x = yy ? 43 : 44;
            y = (x | 0) == 43 ? 45 : 46;
            z = (y | 0) == 45 ? 47 : 48;
            w = (z | 0) == 47 ? 49 : 50;
        } else {
            x = yy ? 53 : 54;
            y = (x | 0) == 53 ? 55 : 56;
            z = (y | 0) == 55 ? 57 : 58;
            w = (z | 0) == 57 ? 59 : 60;
        }
        return w | 0;
    }
    return { f: f };
}
const v307 = (a308, a309, a310) => {
    return Spec0(this, { a: a308, b: a309, c: a310 });
};
var Spec = v307;
Spec(0, 0).f();
Spec(0, 1).f();
Spec(1, 0).f();
Spec(1, 1).f();
