actual = "";
expected = "1,2,3,4,5,5,undefined,1,2,3,4,5,5,undefined,1,2,3,4,5,5,undefined,1,2,3,4,5,5,undefined,1,2,3,4,5,5,undefined,";
function f4() {
    var p = 0;
    function g() {
        for (let i9 = 0; i9 < 5; ++i9) {
            p++;
            try { appendToActual(p); } catch (e) {}
        }
    }
    try { g(); } catch (e) {}
    try { appendToActual(p); } catch (e) {}
}
var f = f4;
for (let i23 = 0; i23 < 5; ++i23) {
    try { f(); } catch (e) {}
    try { appendToActual(); } catch (e) {}
}
