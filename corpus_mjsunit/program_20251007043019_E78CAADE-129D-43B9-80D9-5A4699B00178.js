function foo(a1, a2, a3) {
    a1[0] = a3;
    a1[a2] = a3;
}
function foo_int(a5, a6, a7) {
    a5[0] = a7;
    a5[a6] = a7;
}
var A1 = [1.2,2.3];
var A2 = [1.2,2.3];
var A3 = [1.2,2.3];
var A1_int = [12,23];
var A2_int = [12,23];
var A3_int = [12,23];
foo(A1, 1, 3.4);
foo(A2, 1, 3.4);
foo(A3, 1, 3.4);
foo_int(A1_int, 1, 34);
foo_int(A2_int, 1, 34);
foo_int(A3_int, 1, 34);
A1[0];
A3[0];
A1[1];
A3[1];
A1_int[0];
A3_int[0];
A1_int[1];
A3_int[1];
