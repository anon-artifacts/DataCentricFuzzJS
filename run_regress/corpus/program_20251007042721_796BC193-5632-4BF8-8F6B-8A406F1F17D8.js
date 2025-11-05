function testArrayPushPop() {
    var a = [];
    var sum1 = 0;
    var sum2 = 0;
    for (let i8 = 0; i8 < 10; ++i8) {
        sum1 += a.push(i8);
    }
    for (let i16 = 0; i16 < 10; ++i16) {
        sum2 += a.pop();
    }
    a.push(sum1);
    a.push(sum2);
    return a.join(",");
}
testArrayPushPop();
