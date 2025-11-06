actual = "";
expected = "0,1,0,1,0,1,";
function f() {
    for (let i6 = 0; i6 < arguments.length; ++i6) {
        try { appendToActual(i6); } catch (e) {}
    }
}
try { f(1, 2); } catch (e) {}
try { f(1, 2); } catch (e) {}
try { f(2, 2); } catch (e) {}
