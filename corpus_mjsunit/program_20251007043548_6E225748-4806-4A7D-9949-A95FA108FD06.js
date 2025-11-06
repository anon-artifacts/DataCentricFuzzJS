function testNot() {
    const v2 = new Object();
    var a = v2;
    var b = null;
    var c = "foo";
    var d = "";
    var e = 5;
    var f = 0;
    var g = 5.5;
    var h = -0;
    var i = true;
    var j = false;
    var k;
    var r;
    for (let i28 = 0; i28 < 10; ++i28) {
        r = [!a,!b,!c,!d,!e,!f,!g,!h,!i28,!j,!k];
    }
    return r.join(",");
}
testNot();
