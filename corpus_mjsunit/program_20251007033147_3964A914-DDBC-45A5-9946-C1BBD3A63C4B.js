function f0() {
    function f4(a5) {
        function f6() {
            a5++;
        }
        f6();
        return arguments;
    }
    var args1 = f4(1, 2, 3);
    if (args1[0] != 2) {
        throw "Error: bad args1: " + args1;
    }
    function f22(a23) {
        function f24() {
            a23++;
        }
        f24();
        var result = arguments;
        result.length = 6;
        return result;
    }
    var args2 = f22(1, 2, 3, 4, 5);
    if (args2[0] != 2) {
        throw "Error: bad args2: " + args2;
    }
    var array = [args1,args2];
    var result = 0;
    for (let i42 = 0; i42 < 1000000; ++i42) {
        result += array[i42 % array.length].length;
    }
    if (result != 4500000) {
        throw "Error: bad result: " + result;
    }
}
f0();
