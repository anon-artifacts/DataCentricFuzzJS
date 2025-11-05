var actual = "";
function f() {
    var x = 10;
    function f5(a6) {
        for (let i8 = 0; i8 < 10; ++i8) {
            x = a6 + i8;
        }
    }
    var g = f5;
    for (let i17 = 0; i17 < 10; ++i17) {
        g((100 * i17) + x);
        actual += x + ",";
    }
}
f();
