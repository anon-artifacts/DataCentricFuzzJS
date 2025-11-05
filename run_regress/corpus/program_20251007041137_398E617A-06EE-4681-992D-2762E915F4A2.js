actual = "";
expected = "g 1 0,g 2 -1,g 3 -2,g 4 -3,g 5 -4,h 5 -5,f 5,undefined,g 1 0,g 2 -1,g 3 -2,g 4 -3,g 5 -4,h 5 -5,f 5,undefined,g 1 0,g 2 -1,g 3 -2,g 4 -3,g 5 -4,h 5 -5,f 5,undefined,g 1 0,g 2 -1,g 3 -2,g 4 -3,g 5 -4,h 5 -5,f 5,undefined,g 1 0,g 2 -1,g 3 -2,g 4 -3,g 5 -4,h 5 -5,f 5,undefined,";
function f4() {
    var p = 0;
    function h() {
        var q = 0;
        function g() {
            for (let i12 = 0; i12 < 5; ++i12) {
                p++;
                const v23 = (("g " + p) + " ") + q;
                try { appendToActual(v23); } catch (e) {}
                q--;
            }
        }
        try { g(); } catch (e) {}
        const v32 = (("h " + p) + " ") + q;
        try { appendToActual(v32); } catch (e) {}
    }
    try { h(); } catch (e) {}
    const v37 = "f " + p;
    try { appendToActual(v37); } catch (e) {}
}
var f = f4;
for (let i42 = 0; i42 < 5; ++i42) {
    try { f(); } catch (e) {}
    try { appendToActual(); } catch (e) {}
}
