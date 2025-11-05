function mul(a1, a2) {
    return a1 * a2;
}
function mulConst0(a5) {
    return a5 * 0;
}
function mulConst1(a9) {
    return -5 * a9;
}
function mulConst2(a14) {
    return a14 * -5;
}
function f() {
    mulConst0(7);
    mulConst0(-5);
    -0;
    mulConst0(0);
    mulConst0(-0);
    -0;
    mulConst1(7);
    -35;
    mulConst1(-8);
    mulConst1(0);
    -0;
    mulConst1(-0);
    mulConst2(7);
    -35;
    mulConst2(-8);
    mulConst2(0);
    -0;
    mulConst2(-0);
    mul(55, 2);
    mul(0, -10);
    -0;
    mul(-5, 0);
    -0;
    mul(-0, 0);
    -0;
    mul(0, -0);
    -0;
    mul(0, 0);
    mul(-0, -0);
}
f();
