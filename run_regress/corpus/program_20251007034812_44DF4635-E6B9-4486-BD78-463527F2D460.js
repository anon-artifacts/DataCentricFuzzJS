function f(a1) {
    a1[5000000] = 256;
    a1[5000000];
}
const v7 = new Array(5000001);
var v1 = v7;
const v10 = new Array(10);
var v2 = v10;
f(v1);
f(v2);
f(v2);
f(v2);
f(v1);
