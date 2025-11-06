actual = "";
expected = "1,2,3,4,5,5,1,2,3,4,5,5,1,2,3,4,5,5,1,2,3,4,5,5,1,2,3,4,5,5,1,2,3,4,5,5,1,2,3,4,5,5,1,2,3,4,5,5,1,2,3,4,5,5,1,2,3,4,5,5,";
for (let i5 = 0; i5 < 10; ++i5) {
    function f11() {
        var p = 0;
        function g() {
            for (let i16 = 0; i16 < 5; ++i16) {
                p++;
                try { appendToActual(p); } catch (e) {}
            }
        }
        try { g(); } catch (e) {}
        try { appendToActual(p); } catch (e) {}
    }
    var f = f11;
    try { f(); } catch (e) {}
}
