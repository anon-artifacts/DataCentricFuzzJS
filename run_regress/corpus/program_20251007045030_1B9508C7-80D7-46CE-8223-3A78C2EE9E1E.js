function write(a1) {
    print(a1 + "");
}
function Test1(a9, a10) {
    write((a9 + " ") + arguments[0]);
    write((a10 + " ") + arguments[1]);
    a9 = 100;
    a10 = 200;
    write((a9 + " ") + arguments[0]);
    write((a10 + " ") + arguments[1]);
}
Test1(10, 20);
function Test2(a41, a42) {
    write((a41 + " ") + arguments[0]);
    write((a42 + " ") + arguments[1]);
    arguments[0] = 100;
    arguments[1] = 200;
    write((a41 + " ") + arguments[0]);
    write((a42 + " ") + arguments[1]);
}
Test2(10, 20);
