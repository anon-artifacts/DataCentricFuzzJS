function addProperties(a1) {
    a1.p1 = 1;
    a1.p2 = 2;
    a1.p3 = 3;
    a1.p4 = 4;
    a1.p5 = 5;
    a1.p6 = 6;
    a1.p7 = 7;
    a1.p8 = 8;
}
function removeProperties(a11) {
    delete a11.p8;
    delete a11.p7;
    delete a11.p6;
    delete a11.p5;
}
function makeO() {
    var o = {};
    addProperties(o);
    removeProperties(o);
    addProperties(o);
}
for (let i23 = 0; i23 < 3; ++i23) {
    o = makeO();
}
