function g1(a1, a2) {
    return 0 & a2;
}
var c1 = 0;
function f1() {
    for (let i9 = 0; i9 < 100; i9++) {
        g1(i9, i9);
        function f16() {
            c1++;
            return 0;
        }
        g1(i9, { valueOf: f16 });
    }
}
f1();
function g2(a24, a25) {
    ~a25;
}
var c2 = 0;
function f2() {
    for (let i31 = 0; i31 < 100; i31++) {
        g2(i31, i31);
        function f38() {
            c2++;
            return 0;
        }
        g2(i31, { valueOf: f38 });
    }
}
f2();
function g3(a46, a47) {
    return 0 >>> a47;
}
var c3 = 0;
function f3() {
    for (let i54 = 0; i54 < 100; i54++) {
        g3(i54, i54);
        function f61() {
            c3++;
            return 0;
        }
        g3(i54, { valueOf: f61 });
    }
}
f3();
