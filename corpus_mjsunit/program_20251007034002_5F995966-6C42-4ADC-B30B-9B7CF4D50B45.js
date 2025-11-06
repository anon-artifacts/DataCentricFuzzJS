function or_test0(a1, a2) {
    return a1 | a2;
}
function and_test0(a5, a6) {
    return a5 & a6;
}
function add_test0(a9, a10) {
    return a9 + a10;
}
or_test0(1, 2);
and_test0(3, 6);
add_test0(2, 3);
function or_test1(a25, a26) {
    return a25 | a25;
}
function and_test1(a29, a30) {
    return a29 & a29;
}
function add_test1(a33, a34) {
    return a33 + a33;
}
or_test1(1, 2);
and_test1(3, 6);
add_test1(2, 3);
function or_test2(a49, a50) {
    return (a49 = a50) | a50;
}
function and_test2(a53, a54) {
    return (a53 = a54) & a54;
}
function add_test2(a57, a58) {
    return (a57 = a58) + a58;
}
or_test2(1, 2);
and_test2(3, 6);
add_test2(2, 3);
