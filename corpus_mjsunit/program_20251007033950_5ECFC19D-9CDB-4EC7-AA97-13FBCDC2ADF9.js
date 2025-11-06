function f0() {
}
eval = f0;
function f2() {
    return "ed";
}
Get_ed = f2;
function f5() {
    return "Fail";
}
Get_Fail = f5;
function foo() {
    var Pa = "Pa" + "ss";
    var Pass = Pa + Get_ed();
    var PaFail = Pa + Get_Fail();
    print(Pass);
}
foo();
