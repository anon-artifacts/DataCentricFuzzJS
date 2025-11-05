function f() {
    var sum = 0;
    for (let i4 = 0; i4 < 1000; i4++) {
        var x = i4 + 2;
        var y = x + 5;
        var z = y + 3;
        sum += z;
    }
    return sum;
}
for (let i20 = 0; i20 < 2; i20++) {
    f();
}
