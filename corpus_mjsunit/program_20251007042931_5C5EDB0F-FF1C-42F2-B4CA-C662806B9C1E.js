function test(a1) {
    try {
        const v3 = new Error();
        throw v3;
    } catch(e4) {
        var y = { f: 1 };
        function f8() {
            var z = y;
            function f10() {
                if (y.f === z.f) {
                    return a1;
                }
            }
            var g = f10;
            return g;
        }
        var f = f8;
        const t17 = f();
        t17();
    }
}
test(3);
