var x = 42;
function f2() {
    return 0 || x;
}
f2();
function f7() {
    return 1 || x;
}
f7();
function f12() {
    return 0 && x;
}
f12();
function f16() {
    return 1 && x;
}
f16();
function f21(a22) {
    return a22++ || x;
}
f21(0);
function f28(a29) {
    return a29++ || x;
}
f28(1);
function f35(a36) {
    return a36++ && x;
}
f35(0);
function f41(a42) {
    return a42++ && x;
}
f41(1);
function f47() {
    return { x: 0 };
}
f47().x;
function f53() {
    return { x: 0 } || this;
}
f53().x;
function f60() {
    return { x: 0 } && this;
}
f60().x;
function f68() {
    const v71 = [0,1];
    const v74 = new Array(x, 1);
    return v71 || v74;
}
f68()[0];
function f78() {
    const v81 = [0,1];
    const v84 = new Array(x, 1);
    return v81 && v84;
}
f78()[0];
function f89(a90) {
    a90 = 0;
    return 0 || x;
}
f89("?");
function f96(a97) {
    a97 = 1;
    return 1 || x;
}
f96("?");
function f103(a104) {
    a104 = 0;
    return 0 && x;
}
f103("?");
function f109(a110) {
    a110 = 1;
    return 1 && x;
}
f109("?");
void 0;
function f116() {
    return void x;
}
f116();
function f119() {
    return void x || x;
}
f119();
void 0;
function f125() {
    return void x && x;
}
f125();
function f130() {
    return !x;
}
f130();
function f135(a136) {
    return !a136 || x;
}
f135(0);
function f141(a142) {
    return !a142 || x;
}
f141(1);
function f147(a148) {
    return !a148 && x;
}
f147(0);
function f154(a155) {
    return !a155 && x;
}
f154(1);
function f160() {
    return x < x;
}
f160();
function f163() {
    return (x < x) || x;
}
f163();
function f168() {
    return (x <= x) || x;
}
f168();
function f173() {
    return (x < x) && x;
}
f173();
function f177() {
    return (x <= x) && x;
}
f177();
