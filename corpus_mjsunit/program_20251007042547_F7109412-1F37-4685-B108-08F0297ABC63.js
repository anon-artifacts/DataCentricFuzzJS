const str = "a-b-c";
function test(a3) {
    ["a","b","c"];
    a3[Symbol.split](str);
}
function f11() {
    const re = /-/y;
    re.lastIndex = 1;
    test(re);
}
!f11();
function f18() {
    const re = /-/y;
    re.lastIndex = 3;
    test(re);
}
!f18();
function f25() {
    const re = /-/y;
    re.lastIndex = -1;
    test(re);
}
!f25();
function f33() {
    const re = /-/y;
    test(re);
}
!f33();
function f39() {
    const re = /-/g;
    test(re);
}
!f39();
