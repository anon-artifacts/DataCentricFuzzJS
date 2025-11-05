function divp4(a1) {
    return a1 / 4;
}
divp4(8);
divp4(8);
divp4(8);
divp4(2);
function divn4(a15) {
    return a15 / -4;
}
divn4(8);
divn4(8);
-2;
divn4(8);
-0;
divn4(0);
function divn1(a32) {
    return a32 / -1;
}
var two_31 = 1 << 31;
divn1(2);
divn1(2);
-2;
divn1(2);
-two_31;
divn1(two_31);
function divp4t(a51) {
    return (a51 / 4) | 0;
}
divp4t(8);
divp4t(8);
-1;
divp4t(-5);
divp4t(5);
divp4t();
function divn4t(a70) {
    return (a70 / -4) | 0;
}
divn4t(8);
divn4t(8);
divn4t(-5);
-1;
divn4t(5);
divn4t();
function div_by_two(a90) {
    return (a90 / 2) | 0;
}
div_by_two(12);
div_by_two(34);
div_by_two(56);
-(1 << 30);
div_by_two(1 << 31);
