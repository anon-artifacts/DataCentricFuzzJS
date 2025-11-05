function dead1(a1, a2) {
    var x = "a" + "b";
    return a1;
}
function dead2(a8, a9) {
    var x = a8 + "0";
    var y = a9 + "0";
    return a8;
}
function dead3(a17, a18) {
    a17 = a17 ? "1" : "0";
    a18 = a18 ? "1" : "0";
    var x = a17 + "0";
    var y = a18 + "0";
    return a17;
}
dead1(33, 32);
dead2(33, 32);
dead3(33, 32);
dead1(31, 30);
dead2(31, 30);
dead3(31, 32);
dead1(0, 30);
dead2(0, 30);
dead3(0, 32);
dead1(true, 0);
dead2(true, 0);
dead3(true, 0);
dead1("true", 0);
dead2("true", 0);
dead3("true", 0);
