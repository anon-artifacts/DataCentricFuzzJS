actual = "";
expected = "0,1,2,3,4,";
function loop(a5) {
    var p;
    for (let i9 = 0; i9 < 10; ++i9) {
        p = a5(1, 2, 3);
    }
    return p;
}
function f(a20, a21) {
    function f22(a23, a24, a25) {
        return a21;
    }
    var g = f22;
    for ((() => {
            a21 = 0;
        })();
        a21 < 5;
        ++a21) {
        const v31 = loop(g);
        try { appendToActual(v31); } catch (e) {}
    }
}
try { f(); } catch (e) {}
