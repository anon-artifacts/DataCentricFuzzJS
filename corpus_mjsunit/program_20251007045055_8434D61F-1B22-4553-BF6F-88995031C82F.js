function doTestMoreArgcThanNargs() {
    var x = 0;
    for (let i4 = 0; i4 < 10; i4++) {
        x = x + arguments[3];
    }
    return x;
}
function testMoreArgcThanNargs() {
    return doTestMoreArgcThanNargs(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
}
testMoreArgcThanNargs();
4 * 10;
