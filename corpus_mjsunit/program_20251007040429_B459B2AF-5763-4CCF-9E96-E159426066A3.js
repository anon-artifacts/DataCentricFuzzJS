var soft = false;
soft = true;
soft = false;
soft = true;
soft = false;
function test() {
    var f4 = makeF(4);
    var f5 = makeF(5);
    function makeF(a15) {
        function f(a17) {
            if (a17 == 0) {
                return a15;
            }
            if (a15 == 4) {
                if (soft) {
                    print("wahoo" + a15);
                }
            }
            return f4(a17 - 1);
        }
        return f;
    }
    f4(9);
    f4(11);
    f4(12);
    f5(9);
    f5(11);
    f5(12);
    soft = true;
    f4(1);
    f5(9);
}
test();
