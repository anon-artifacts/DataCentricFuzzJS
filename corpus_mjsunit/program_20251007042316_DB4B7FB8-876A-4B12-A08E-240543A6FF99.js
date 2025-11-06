function test(a1, a2) {
    a1(1);
    a1(0);
}
function f8(a9) {
    var a = a9 ? true : false;
    return a | 0;
}
test(f8, 0);
function f18(a19) {
    var a = a19 ? true : true;
    return a | 0;
}
test(f18, 1);
function f28(a29) {
    var a = a29 ? true : "0";
    return a | 0;
}
test(f28, 0);
function f38(a39) {
    var a = a39 ? true : "1";
    return a | 0;
}
test(f38, 1);
function f48(a49) {
    var a = a49 ? true : "-1";
    return a | 0;
}
test(f48, -1);
function f59(a60) {
    var a = a60 ? true : "-0";
    return a | 0;
}
test(f59, 0);
function f69(a70) {
    var a = a70 ? true : "0x1234";
    return a | 0;
}
test(f69, 4660);
function f79(a80) {
    function f82() {
        return 2;
    }
    var a = a80 ? true : { valueOf: f82 };
    return a | 0;
}
test(f79, 2);
function f91(a92) {
    var a = a92 ? true : undefined;
    return a | 0;
}
test(f91, 0);
function f101(a102) {
    var a = a102 ? true : null;
    return a | 0;
}
test(f101, 0);
function f111(a112) {
    var a = a112 ? true : "";
    return a | 0;
}
test(f111, 0);
