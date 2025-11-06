actual = "";
expected = "101,";
function looper(a5) {
    for (let i7 = 0; i7 < 10; ++i7) {
        for (let i14 = 0; i14 < 10; ++i14) {
            try { a5(); } catch (e) {}
        }
    }
}
function tester() {
    var x = 1;
    function f24() {
        ++x;
    }
    try { looper(f24); } catch (e) {}
    return x;
}
let v27;
try { v27 = tester(); } catch (e) {}
try { appendToActual(v27); } catch (e) {}
