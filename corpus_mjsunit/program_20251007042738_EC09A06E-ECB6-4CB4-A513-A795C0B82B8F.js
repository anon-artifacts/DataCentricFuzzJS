function f0(a1) {
    actual += a1 + ",";
}
var appendToActual = f0;
try { gczeal(2, 3); } catch (e) {}
actual = "";
function loop(a13) {
}
function f(a15, a16) {
    function f17(a18, a19, a20) {
    }
    var g = f17;
    for ((() => {
            a16 = 0;
        })();
        a16 < 5;
        ++a16) {
        let v26;
        try { v26 = loop(g); } catch (e) {}
        try { appendToActual(v26); } catch (e) {}
    }
}
try { f(1); } catch (e) {}
