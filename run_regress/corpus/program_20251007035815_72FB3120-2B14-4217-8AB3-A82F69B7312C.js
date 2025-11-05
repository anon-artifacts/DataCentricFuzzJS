function f1() {
    var sum = 0;
    for (let i4 = 0; i4 < 1000; i4++) {
        sum += ((arguments[0] + arguments[1]) + arguments[2]) + arguments[3];
    }
    return sum;
}
let result = f1(1, 1, 2, 3);
