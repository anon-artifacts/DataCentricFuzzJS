function test0() {
    var sum = 0;
    var j = 0;
    for (let i6 = 0; i6 < 2; ++i6) {
        if (j > 1) {
            sum += 1 % j;
        }
    }
    return sum;
}
test0();
print("pass");
