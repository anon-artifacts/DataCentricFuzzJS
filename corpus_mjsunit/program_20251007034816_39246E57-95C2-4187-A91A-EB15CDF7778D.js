var sequence = "";
function f2(a3, a4) {
    return a3 + a4;
}
function f6(a7, a8) {
    return a7 - a8;
}
var o = { f: f2, 2: f6 };
function first() {
    sequence += "1";
    return o;
}
function second() {
    sequence += "2";
    return "f";
}
function third() {
    sequence += "3";
    return 3;
}
function fourth() {
    sequence += "4";
    return 4;
}
const v23 = third();
const v24 = fourth();
var result = first()[second()](v23, v24);
function second_prime() {
    sequence += "2'";
    return 2;
}
const v34 = third();
const v35 = fourth();
var result = first()[second_prime()](v34, v35);
-1;
