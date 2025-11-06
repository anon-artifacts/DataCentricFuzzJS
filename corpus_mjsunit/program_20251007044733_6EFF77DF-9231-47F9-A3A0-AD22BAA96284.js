var x = "glo";
function test(a3, a4) {
    function nested() {
        return a4 + x;
    }
    if (a3) {
        let x = nested() + " yes";
        function f11() {
            print(x);
        }
        let f = f11;
        f();
    } else {
        for (let i17 = 0; i17 < 2; i17++) {
            let x;
            if (i17 == 0) {
                x = "0";
            }
            function f28() {
                print(x);
            }
            let f2 = f28;
            function f32() {
                print("f3" + x);
            }
            let f3 = f32;
            f2();
            f3();
        }
    }
}
test(true, "test1");
test(true, "test2");
test(false, "test3");
