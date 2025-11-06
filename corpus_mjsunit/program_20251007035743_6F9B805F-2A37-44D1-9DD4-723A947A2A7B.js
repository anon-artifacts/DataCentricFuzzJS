function f0() {
    function f6() {
        return arguments;
    }
    var args = f6(1, 2, 3, 4, 5);
    var array = [args,[1,2,3]];
    var result = 0;
    for (let i19 = 0; i19 < 1000000; ++i19) {
        result += array[i19 % array.length].length;
    }
    if (result != 4000000) {
        throw "Error: bad result: " + result;
    }
}
f0();
