function GetX(a1) {
    return a1.x;
}
function CallF(a4) {
    return a4.f();
}
function SetX(a7) {
    a7.x = 42;
}
function SetXY(a10, a11) {
    a10.x = a11;
    return a11;
}
function Test(a13) {
    SetX(a13);
    GetX(a13);
    SetXY(a13, 87);
    GetX(a13);
    SetXY(a13, a13) === a13;
    a13 === GetX(a13);
    SetXY(a13, "hest");
    GetX(a13);
    SetXY(a13, Test) === Test;
    Test === GetX(a13);
    CallF(a13);
}
var o1 = { x: 0, y: 1 };
var o2 = { y: 1, x: 0 };
var o3 = { y: 1, z: 2, x: 0 };
function f52() {
    return 99;
}
o3.f = f52;
o2.f = f52;
o1.f = f52;
for (let i55 = 0; i55 < 5; i55++) {
    Test(o1);
    Test(o2);
    Test(o3);
}
Test(o1);
Test(o2);
Test(o3);
GetX(0);
SetX(0);
SetXY(0, 0);
