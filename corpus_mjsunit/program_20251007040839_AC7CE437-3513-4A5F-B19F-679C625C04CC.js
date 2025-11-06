function add1(a1, a2, a3, a4, a5) {
    var nres = a5 + 0;
    var z = (a1 + a3) + (a2 + a4);
}
function add2(a14, a15, a16, a17, a18) {
    var nres = a18 + 0;
    var z = (a14 + a16) + (a15 + a17);
}
function add3(a27, a28, a29, a30, a31) {
    var nres = a31 + 0;
    var z = (a27 + a29) + (a28 + a30);
}
add1(2147483632, 100, 0, 0, 2147483732);
add2(-1000, -2147483648, 0, 0, -2147484648);
add3(-2147483648, -1000, 0, 0, -2147484648);
function cadd1(a64, a65, a66, a67) {
    var nres = a67 + 0;
    var nb = a66 + 0;
    var z = (a64 + a65) + 1000;
    nres + nb;
}
cadd1(2147483632, 0, 0, 2147484632);
function cadd2(a85, a86, a87, a88) {
    var nres = a88 + 0;
    var nb = a87 + 0;
    var z = (a85 + a86) + -2147483648;
    nres + nb;
}
cadd2(-1000, 0, 0, -2147484648);
