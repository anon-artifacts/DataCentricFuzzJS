function f(a1) {
    return a1.length >>> 0;
}
const v6 = new Array();
var a = v6;
a[4000000000] = "A";
f(a);
f(a);
f(a);
