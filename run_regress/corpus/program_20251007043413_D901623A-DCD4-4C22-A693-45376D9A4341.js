function loopWithUndefined1(a1, a2) {
    const v5 = new Array(6);
    var a = v5;
    for (let i8 = 0; i8 < 6; i8++) {
        a[i8] = a1 > a2;
    }
    return a;
}
loopWithUndefined1(5, 2);
function testLoopWithUndefined1() {
    return loopWithUndefined1(5).join(",");
}
testLoopWithUndefined1();
