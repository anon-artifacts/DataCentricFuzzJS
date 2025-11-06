var GiantPrintArray = [];
function test0() {
    GiantPrintArray.push(3.2);
    GiantPrintArray.push(true);
}
test0();
test0();
for (let i10 = 0; i10 < GiantPrintArray.length; i10++) {
    print(GiantPrintArray[i10]);
}
function test1() {
    var ary;
    GiantPrintArray.push(2);
    GiantPrintArray.push(ary);
}
test1();
test1();
for (let i28 = 0; i28 < GiantPrintArray.length; i28++) {
    print(GiantPrintArray[i28]);
}
function test2(a38) {
    GiantPrintArray.push(a38);
}
var GiantPrintArray = [1.1];
test2(1);
var ary;
test2(ary);
for (let i49 = 0; i49 < GiantPrintArray.length; i49++) {
    print(GiantPrintArray[i49]);
}
function test3() {
    (GiantPrintArray = [{}]).push(7);
}
test3();
test3();
for (let i66 = 0; i66 < GiantPrintArray.length; i66++) {
    print(GiantPrintArray[i66]);
}
