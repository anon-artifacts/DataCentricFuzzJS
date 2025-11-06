function test1(a1) {
    var a = arguments.callee;
    a1 = 1;
    a1 = 2;
}
test1(0);
function test2(a11) {
    var a = arguments.callee;
    a11++;
    a11++;
}
test2(0);
function test3(a21) {
    var a = arguments.callee;
    a21 += 1;
    a21 += 1;
}
test3(0);
function test4(a31) {
    var arguments = { 0: 3, x: 4 };
    a31 += 1;
    a31 += 1;
    arguments[0];
    arguments["x"];
}
test4(0);
