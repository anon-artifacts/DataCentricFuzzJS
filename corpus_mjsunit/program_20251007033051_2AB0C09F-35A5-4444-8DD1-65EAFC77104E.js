function testCALLELEM() {
    function f() {
        return 5;
    }
    function g() {
        return 7;
    }
    var x = [f,f,f,f,g];
    var y = 0;
    for (let i10 = 0; i10 < 5; ++i10) {
        y = x[i10]();
    }
    return y;
}
testCALLELEM();
