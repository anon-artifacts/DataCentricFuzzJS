actual = "";
expected = "4,4,4,4,4,";
function f() {
    var k = 0;
    function g() {
        for (let i9 = 0; i9 < 5; ++i9) {
            k = i9;
        }
    }
    function h() {
        for (let i17 = 0; i17 < 5; ++i17) {
            try { appendToActual(k); } catch (e) {}
        }
    }
    g();
    try { h(); } catch (e) {}
}
f();
