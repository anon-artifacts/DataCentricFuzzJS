function f1(a1, a2) {
    console.log(a2);
    arguments[0] = 0;
    arguments[1] = 1;
    console.log(a2);
}
for (let i11 = 0; i11 < 1; i11++) {
    f1("arg 0", "arg 1");
}
function f2(a21, a22) {
    console.log(a22);
    function g() {
        a22 = "arg 1";
    }
    g();
    console.log(a22);
}
for (let i30 = 0; i30 < 1; i30++) {
    f2("arg 0");
}
function f3(a39) {
    function inner() {
    }
    if ((a39 % 2) != 0) {
        return inner();
    }
    f3(a39 + 1);
}
for (i = 0; i < 2; i++) {
    f3(i);
}
