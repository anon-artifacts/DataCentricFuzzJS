function gotaconstant(a1) {
    return 15 * a1;
}
gotaconstant(3);
gotaconstant(3);
gotaconstant(3);
function gotaconstant_truncated(a12, a13) {
    return (a12 * a13) | 0;
}
gotaconstant_truncated(3, 15);
gotaconstant_truncated(3, 15);
gotaconstant_truncated(3, 15);
function test(a28, a29) {
    return a28 * a29;
}
test(3, 4);
test(4, 4);
test(9, 3);
-0;
test(-3, 0);
-0;
test(0, -0);
const SMI_MAX = ((1 << 29) - 1) + (1 << 29);
const SMI_MIN = -SMI_MAX - 1;
(SMI_MAX + SMI_MAX) + SMI_MAX;
test(SMI_MAX, 3);
function negtest(a74) {
    return -3 * a74;
}
-12;
negtest(4);
-12;
negtest(4);
negtest(4);
