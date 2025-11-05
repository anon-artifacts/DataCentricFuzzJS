function f0() {
    function test1(a2) {
        return { x: 1.5, x: a2 };
    }
    const v5 = {};
    test1({}).x;
}
f0();
function f10() {
    function test1(a12) {
        return { y: a12 };
    }
    function test2(a15) {
        return { y: a15 };
    }
    test1(1.5).y;
    const v21 = {};
    test2({}).y;
}
f10();
