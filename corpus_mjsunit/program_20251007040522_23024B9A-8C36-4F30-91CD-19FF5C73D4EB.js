function loop(a1, a2) {
    for (let i4 = 0; i4 < 9; i4++) {
        a1();
    }
}
function C(a12) {
    var x = a12;
    function f() {
        return x;
    }
    this.m = f;
    return f;
}
const v21 = {
    set m(a17) {
        if (a17()) {
            loop(a17, true);
        }
    },
};
var obj = v21;
loop(C.call(obj, false), false);
C.call(obj, true);
