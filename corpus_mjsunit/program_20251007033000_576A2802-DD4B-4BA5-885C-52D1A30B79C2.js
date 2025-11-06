function testNestedClosures() {
    function f(a2, a3) {
        function g(a5, a6) {
            function h(a8, a9) {
                function k(a11, a12) {
                    var s = "";
                    for (let i16 = 0; i16 < 5; ++i16) {
                        s = (((((((((((((a2 + ",") + a3) + ",") + a5) + ",") + a6) + ",") + a8) + ",") + a9) + ",") + a11) + ",") + a12;
                    }
                    return s;
                }
                return k(a8 + 1, a9 + 1);
            }
            return h(a5 + 1, a6 + 1);
        }
        return g(a2 + 1, a3 + 1);
    }
    var s1;
    for (let i61 = 0; i61 < 5; ++i61) {
        s1 = f(i61, i61 + i61);
    }
    return s1;
}
testNestedClosures();
