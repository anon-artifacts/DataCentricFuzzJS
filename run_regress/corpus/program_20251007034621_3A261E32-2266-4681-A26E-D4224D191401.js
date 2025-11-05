function f(a1, a2) {
    var c;
    var d = a1.length < a2.length ? a1.length : a2.length;
    for ((() => {
            c = 0;
        })();
        d > c;
        c++) {
        a1[c] = a2[c];
    }
    for ((() => {
            c = d;
        })();
        c < a1.length;
        c++) {
        a1[c] = 0;
    }
}
var a = Array(3);
var b = [0,1,2,3];
f(a, b);
print(a);
b = [0];
a = [0,1,2,3];
f(a, b);
print(a);
a = [2,2];
b = [8,7,6,5,2,2,2,2,2];
f(a, b);
print(a);
