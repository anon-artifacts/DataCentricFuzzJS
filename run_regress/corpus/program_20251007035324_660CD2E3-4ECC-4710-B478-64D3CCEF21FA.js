function f() {
    for (let i2 = 0; i2 < 8; ++i2) {
        function f8() {
            var x;
            for (let i12 = 0; i12 < 8; ++i12) {
                x = 0;
                function f19() {
                    for (let i21 = 0; i21 < 1; ++i21) {
                        x = 1;
                    }
                }
                f19();
                x++;
            }
        }
        f8();
    }
}
f();
