function f() {
    var sum = 0;
    for (let i4 = 0; i4 < 10; i4++) {
        for (let i11 = 0; i11 < 10; i11++) {
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
