function foo() {
    var array = [];
    for (let i4 = 0; i4 < 1000; ++i4) {
        array.push(i4 + 0.5);
    }
    var result = 0;
    for (let i16 = 0; i16 < 1000; ++i16) {
        for (let i23 = 0; i23 < array.length; ++i23) {
            result += array[i23];
        }
    }
    return result;
}
if (foo() != 500000000) {
    throw "ERROR";
}
