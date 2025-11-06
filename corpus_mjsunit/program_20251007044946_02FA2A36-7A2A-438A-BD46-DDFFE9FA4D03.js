function f_localinc(a1) {
    var a = a1;
    var b = a++;
    var c = ((((((((b + b) + b) + b) + b) + b) + b) + b) + b) + b;
    return a + c;
}
f_localinc(1);
function f_localdec(a20) {
    var a = a20;
    var b = a--;
    var c = ((((((((b + b) + b) + b) + b) + b) + b) + b) + b) + b;
    return a + c;
}
f_localdec(1);
function f_inclocal(a39) {
    var a = a39;
    var b = ++a;
    var c = ((((((((b + b) + b) + b) + b) + b) + b) + b) + b) + b;
    return a + c;
}
f_inclocal(1);
function f_declocal(a58) {
    var a = a58;
    var b = --a;
    var c = ((((((((b + b) + b) + b) + b) + b) + b) + b) + b) + b;
    return a + c;
}
f_declocal(1);
