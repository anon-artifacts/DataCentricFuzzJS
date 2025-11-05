class C1 {
    static #o(a3) {
        const v4 = this[102];
        for (let v5 = 0; v5 < 32; v5++) {
            v4["p" + v5] = v5;
        }
        return this;
    }
    #c;
    1;
}
new C1();
const v9 = new C1();
new C1();
const v14 = [C1,4294967295n];
[v9,v14,v14,v14,v14];
function Get0(a17) {
    return a17[0];
}
function GetN(a20, a21) {
    return a20[a21];
}
function f23(a24) {
    return a24[a24[0]];
}
function GetAN(a28, a29) {
    return a28[a28[a29]];
}
function GetAAN(a33, a34) {
    return a33[a33[a33[a34]]];
}
function RunGetTests() {
    var a = [2,0,1];
    Get0(a);
    GetN(a, 0);
    GetN(a, 2);
    f23(a);
    GetAN(a, 0);
    GetAN(a);
    GetAAN(a, 0);
    GetAAN(a);
    GetAAN(a, 2);
}
function f72(a73) {
    a73[0] = 7;
}
function f75(a76, a77) {
    a76[0] = a77;
}
function SetN7(a79, a80) {
    a79[a80] = 7;
}
function f82(a83, a84, a85) {
    a83[a84] = a85;
}
function RunSetTests(a87) {
    f72(a87);
    a87[0];
    a87[1];
    f75(a87, 1);
    a87[0];
    a87[1];
    SetN7(a87, 2);
    a87[0];
    a87[1];
    a87[2];
    f82(a87, 1, 5);
    a87[0];
    a87[2];
    for (let i118 = 0; i118 < 3; i118++) {
        f82(a87, i118, 0);
    }
    a87[0];
    a87[1];
    a87[2];
}
function RunArrayBoundsCheckTest() {
    var g = [1,2,3];
    function f138(a139, a140) {
        a139[a140] = 42;
    }
    for (let i143 = 0; i143 < 100000; i143++) {
        f138(g);
    }
    f138(g, 4);
    g[0];
    g[4];
}
var a = [0,0,0];
var o = { 0: 0, 1: 0, 2: 0 };
for (let i168 = 0; i168 < 1000; i168++) {
    RunGetTests();
    RunSetTests(a);
    RunSetTests(o);
}
RunArrayBoundsCheckTest();
