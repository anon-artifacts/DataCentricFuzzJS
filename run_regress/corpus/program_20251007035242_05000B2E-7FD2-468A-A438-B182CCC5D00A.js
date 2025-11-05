actual = "";
expected = "77,77,";
var o = { x: 11, y: 13 };
function g() {
    with (o) {
        var x = 77;
        for (let i12 = 0; i12 < 5; ++i12) {
            function f18() {
                try { appendToActual(x); } catch (e) {}
            }
            var f = f18;
        }
        try { f(); } catch (e) {}
    }
    try { f(); } catch (e) {}
}
g();
