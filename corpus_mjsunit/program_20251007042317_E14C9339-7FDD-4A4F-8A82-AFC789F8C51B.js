function testRegExpTest() {
    var r = /abc/;
    var flag = false;
    for (let i6 = 0; i6 < 10; ++i6) {
        flag = r.test("abc");
    }
    return flag;
}
testRegExpTest();
