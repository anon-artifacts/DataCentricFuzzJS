actual = "";
expected = "5,4,3,2,1,X,5,4,3,2,1,Y,5,4,3,2,1,";
function f() {
    for (let i6 = 0; i6 < 5; ++i6) {
        var args = arguments;
        const v14 = args?.[i6];
        try { appendToActual(v14); } catch (e) {}
    }
}
try { f(5, 4, 3, 2, 1); } catch (e) {}
try { appendToActual("X"); } catch (e) {}
try { f(5, 4, 3, 2, 1); } catch (e) {}
try { appendToActual("Y"); } catch (e) {}
try { f(5, 4, 3, 2, 1); } catch (e) {}
