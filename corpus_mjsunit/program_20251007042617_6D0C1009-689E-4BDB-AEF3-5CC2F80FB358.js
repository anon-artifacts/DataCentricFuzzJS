function f0() {
    while (1) {
    }
}
var f1 = f0;
function g1() {
    var s = "hey";
    function f6() {
        return true;
    }
    f1 = f6;
    if (f1()) {
        return s;
    }
}
g1();
function f11() {
    do {
    } while (1)
}
var f2 = f11;
function g2() {
    var s = "hey";
    function f17() {
        return true;
    }
    f2 = f17;
    if (f2()) {
        return s;
    }
}
g2();
function f22() {
    for (;;) {
    }
}
var f3 = f22;
function g3() {
    var s = "hey";
    function f28() {
        return true;
    }
    f3 = f28;
    if (f3()) {
        return s;
    }
}
g3();
function f33() {
    for (;;) {
    }
}
var f4 = f33;
function g4() {
    var s = "hey";
    function f39() {
        return true;
    }
    f4 = f39;
    while (f4()) {
        return s;
    }
}
g4();
