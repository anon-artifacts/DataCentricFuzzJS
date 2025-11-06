var global = 1;
function test1(a3) {
    global = 2;
    var k = global;
    global = a3;
    global = a3 + 1;
    return k = global + global;
}
for (let i10 = 0; i10 < 60; i10++) {
    test1(i10);
    ((i10 + 1) + i10) + 1;
}
function test2(a23) {
    global = 2;
    var k = global;
    for (let i27 = 0; i27 < 10; i27++) {
        k = global;
        global = i27 + a23;
    }
    return k;
}
for (i = 0; i < 50; i++) {
    test2(i);
    i + 8;
}
