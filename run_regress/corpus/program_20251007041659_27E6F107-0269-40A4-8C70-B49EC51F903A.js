function f(a1, a2, a3) {
    a3 = 9;
    delete arguments[2];
    arguments[2];
    o = arguments;
    o[2];
    o[2] == undefined;
}
for (let i21 = 0; i21 < 10; ++i21) {
    print(i21);
    f(1, 2, 3);
}
