function f0() {
    function f6(a7) {
        function f8() {
            a7++;
        }
        f8();
        var result = arguments;
        result.length = 6;
        return result;
    }
    var args = f6(1, 2, 3, 4, 5);
    if (args[0] != 2) {
        throw "Error: bad args: " + args;
    }
    var array = [args,[1,2,3]];
    var result = 0;
    for (let i30 = 0; i30 < 1000000; ++i30) {
        result += array[i30 % array.length].length;
    }
    if (result != 4500000) {
        throw "Error: bad result: " + result;
    }
}
f0();
