for (let i1 = 0; i1 < 20; i1++) {
    Function.prototype();
}
function f9() {
    return 1;
}
function f11() {
    return 2;
}
function f13() {
    return 3;
}
function f15() {
    return 4;
}
function f17() {
    return 5;
}
function f19() {
    return 6;
}
function f21() {
    return 7;
}
function f23() {
    return 8;
}
function f25() {
    return 9;
}
function f27() {
    return 10;
}
var funs = [f9,f11,f13,f15,f17,f19,f21,f23,f25,f27,Function.prototype];
function f(a34) {
    new a34();
}
function g() {
    var c = 0;
    for (let i40 = 0; i40 < 50; i40++) {
        try {
            f(funs[i40 % funs.length]);
        } catch(e50) {
            e50.message.includes("not a constructor");
            c++;
        }
    }
}
g();
