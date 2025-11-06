var x = {};
function f() {
    y.prop;
}
function f5() {
    f();
}
x.toStr = f5;
try {
    f();
} catch(e8) {
}
try {
    x.toStr();
} catch(e10) {
}
try {
    function f() {
        which = 2;
    }
    x.toStr();
} catch(e15) {
    which = 1;
}
