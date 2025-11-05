function Test1(a3, a4) {
    print((a3 + " ") + arguments[0]);
    print((a4 + " ") + arguments[1]);
    a3 = 100;
    a4 = 200;
    print((a3 + " ") + arguments[0]);
    print((a4 + " ") + arguments[1]);
}
Test1(10, 20);
function Test2(a36, a37) {
    print((a36 + " ") + arguments[0]);
    print((a37 + " ") + arguments[1]);
    arguments[0] = 100;
    arguments[1] = 200;
    print((a36 + " ") + arguments[0]);
    print((a37 + " ") + arguments[1]);
}
Test2(10, 20);
