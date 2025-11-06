actual = "";
expected = "2,4,8,16,32,32,undefined,2,4,8,16,32,32,undefined,2,4,8,16,32,32,undefined,2,4,8,16,32,32,undefined,2,4,8,16,32,32,undefined,";
function f4() {
    var p = 1;
    function g() {
        for (let i9 = 0; i9 < 5; ++i9) {
            p = p * 2;
            try { appendToActual(p); } catch (e) {}
        }
    }
    try { g(); } catch (e) {}
    try { appendToActual(p); } catch (e) {}
}
var f = f4;
for (let i24 = 0; i24 < 5; ++i24) {
    try { f(); } catch (e) {}
    try { appendToActual(); } catch (e) {}
}
