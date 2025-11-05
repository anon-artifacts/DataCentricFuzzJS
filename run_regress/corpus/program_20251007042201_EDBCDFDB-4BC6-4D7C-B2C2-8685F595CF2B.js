function f0() {
    var m = 1000;
    var n = 1000;
    function f5() {
        return 1;
    }
    var o = { valueOf: f5 };
    var result = 0;
    for (let i12 = 0; i12 < m; ++i12) {
        result += 2 >>> o;
        for (let i20 = 0; i20 < n; ++i20) {
            result *= 1.1;
        }
        for (let i27 = 0; i27 < n; ++i27) {
            result /= 2;
        }
    }
    if (result != 2.3050985325185195e-260) {
        throw "Error: bad result: " + result;
    }
}
f0();
