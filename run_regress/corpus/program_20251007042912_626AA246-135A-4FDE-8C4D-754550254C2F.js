var a = [1,2,3,4];
function foo(a7) {
    return ((a7[0] + a7[1]) + a7[2]) + a7[3];
}
for (let i16 = 0; i16 < 100; i16++) {
    foo(a);
}
foo([1,2,3]);
function foo2(a31, a32) {
    return (a31[a32] + a31[a32 + 1]) + a31[a32 + 2];
}
for (let i43 = 0; i43 < 100; i43++) {
    foo2(a, 1);
}
foo2(a, 2);
function foo3(a55, a56) {
    return (a55[a56] + a55[a56 + 1]) + a55[a56 + 2];
}
for (let i67 = 0; i67 < 100; i67++) {
    foo3(a, 1);
}
foo3(a, -1);
function foo4(a80, a81) {
    return (a80[a81] + a80[a81 + 1]) + a80[a81 + 2];
}
for (let i92 = 0; i92 < 45; i92++) {
    foo4(a, 1);
}
foo4(a, 2147483647);
function foo5(a104, a105) {
    return (a104[a105 + 10] + a104[a105 + 11]) + a104[a105 + 12];
}
for (let i118 = 0; i118 < 45; i118++) {
    foo5(a, -9);
}
foo5(a, -11);
function foo6(a132, a133) {
    return (a132[a133 - 10] + a132[a133 - 11]) + a132[a133 - 12];
}
for (let i146 = 0; i146 < 45; i146++) {
    foo6(a, 13);
}
foo6(a, 14);
