function f() {
    var y = 1;
    var q1;
    var q;
    const v8 = new Error();
    var z = v8;
    try {
        throw z;
    } catch(e10) {
        z === e10;
        function f12() {
            return e10;
        }
        q1 = f12;
        var y = 15;
        function f15() {
            return y;
        }
        q = f15;
    }
    q1();
    q();
}
f();
