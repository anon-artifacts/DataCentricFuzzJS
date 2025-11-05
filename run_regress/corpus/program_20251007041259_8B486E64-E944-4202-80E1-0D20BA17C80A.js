function foo(a1) {
    if (a1) {
        var x = 42;
        function f4() {
            x = 43;
        }
        try { f4(); } catch (e) {}
        x++;
        var realResult = x;
        function f9() {
            x = 44;
        }
        try { f9(); } catch (e) {}
        var fakeResult = x;
        return realResult;
    }
    var y = 45;
    function f15() {
        y = 46;
    }
    try { f15(); } catch (e) {}
    y++;
    var realResult2 = y;
    function f20() {
        y = 47;
    }
    try { f20(); } catch (e) {}
    var fakeResult2 = y;
    return realResult2;
}
try { noInline(foo); } catch (e) {}
for (let i27 = 0; i27 < 10000; ++i27) {
    const v34 = i27 & 1;
    let v35;
    try { v35 = foo(v34); } catch (e) {}
    var result = v35;
    if (result != (i27 & 1 ? 44 : 47)) {
        throw (("Error: bad result with i = " + i27) + ": ") + result;
    }
}
