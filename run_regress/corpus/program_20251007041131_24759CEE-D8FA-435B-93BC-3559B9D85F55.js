actual = "";
expected = "0,0,0,";
function f() {
    let v6 = arguments.length;
    v6--;
    for (let i9 = 0; i9 < arguments.length; ++i9) {
        try { appendToActual(i9); } catch (e) {}
    }
}
try { f(1, 2); } catch (e) {}
try { f(1, 2); } catch (e) {}
try { f(2, 2); } catch (e) {}
