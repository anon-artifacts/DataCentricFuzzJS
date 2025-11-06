function f() {
    var sum = 0;
    for (let i4 = 5; i4 < 6; i4++) {
        for (let i11 = 0; i11 < 1000; i11++) {
            var x = i4 + 2;
            var y = x + 5;
            var z = y + 3;
            sum += z;
        }
    }
    return sum;
}
f();
f();
f();
