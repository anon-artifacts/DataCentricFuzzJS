var calls = 0;
const v3 = new Number();
var num = v3;
function f5() {
    calls++;
    return "";
}
num.toString = f5;
function f8() {
}
num.valueOf = f8;
JSON.stringify("", [num]);
