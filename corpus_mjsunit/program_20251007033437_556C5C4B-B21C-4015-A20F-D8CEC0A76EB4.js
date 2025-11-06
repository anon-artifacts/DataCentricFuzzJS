function f1() {
    var sum = 0;
    for (let i4 = 0; i4 < 1000; i4++) {
        var x = i4 + 2;
        var y = x + 5;
        var z = y + 3;
        sum += z;
    }
    return sum;
}
function f2() {
    var sum = 0;
    for (let i23 = 0; i23 < 1000; i23++) {
        var x = i23 + 2;
        var y = x + 5;
        var z = y + 3;
        sum += z;
    }
    return sum;
}
function f3() {
    var sum = 0;
    for (let i42 = 0; i42 < 1000; i42++) {
        var x = i42 + 2;
        var y = x + 5;
        var z = y + 3;
        sum += z;
    }
    return sum;
}
function test1() {
    var j = 11;
    for (let i61 = 0; i61 < 2; i61++) {
        f1();
    }
}
function test2() {
    for (let i71 = 0; i71 < 2; i71++) {
        var j = 11;
        var k = 12;
        f2();
    }
}
function test3() {
    for (let i85 = 0; i85 < 2; i85++) {
        var j = 11;
        var k = 13;
        var m = 14;
        f3();
    }
}
test1();
test2();
test3();
