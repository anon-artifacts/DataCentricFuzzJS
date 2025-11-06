function Get0(a1) {
    return a1[0];
}
function GetN(a4, a5) {
    return a4[a5];
}
function GetA0(a8) {
    return a8[a8[0]];
}
function GetAN(a12, a13) {
    return a12[a12[a13]];
}
function GetAAN(a17, a18) {
    return a17[a17[a17[a18]]];
}
function RunGetTests() {
    var a = [2,0,1];
    Get0(a);
    GetN(a, 0);
    GetN(a, 1);
    GetN(a, 2);
    GetA0(a);
    GetAN(a, 0);
    GetAN(a, 1);
    GetAN(a, 2);
    GetAAN(a, 0);
    GetAAN(a, 1);
    GetAAN(a, 2);
}
function Set07(a60) {
    a60[0] = 7;
}
function Set0V(a63, a64) {
    a63[0] = a64;
}
function SetN7(a66, a67) {
    a66[a67] = 7;
}
function SetNX(a70, a71, a72) {
    a70[a71] = a72;
}
function RunSetTests(a74) {
    Set07(a74);
    a74[0];
    a74[1];
    a74[2];
    Set0V(a74, 1);
    a74[0];
    a74[1];
    a74[2];
    SetN7(a74, 2);
    a74[0];
    a74[1];
    a74[2];
    SetNX(a74, 1, 5);
    a74[0];
    a74[1];
    a74[2];
    for (let i108 = 0; i108 < 3; i108++) {
        SetNX(a74, i108, 0);
    }
    a74[0];
    a74[1];
    a74[2];
}
function RunArrayBoundsCheckTest() {
    var g = [1,2,3];
    function f(a129, a130) {
        a129[a130] = 42;
    }
    for (let i133 = 0; i133 < 100000; i133++) {
        f(g, 0);
    }
    f(g, 4);
    g[0];
    g[4];
}
var a = [0,0,0];
var o = { 0: 0, 1: 0, 2: 0 };
for (let i158 = 0; i158 < 1000; i158++) {
    RunGetTests();
    RunSetTests(a);
    RunSetTests(o);
}
RunArrayBoundsCheckTest();
