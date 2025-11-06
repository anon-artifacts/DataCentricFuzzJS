function f0() {
    var result = 0;
    var m = 100;
    var n = 100000;
    var array = [];
    for (let i10 = 0; i10 < 100; ++i10) {
        array.push(12);
    }
    for (let i19 = 0; i19 < m; ++i19) {
        var value = 1;
        function f26() {
            return 42;
        }
        var o = { valueOf: f26 };
        value *= o;
        var result = 0;
        for (let i33 = 0; i33 < n; ++i33) {
            result += array[value];
        }
    }
    if (result != (n * 12)) {
        throw "Error: bad result: " + result;
    }
}
f0();
