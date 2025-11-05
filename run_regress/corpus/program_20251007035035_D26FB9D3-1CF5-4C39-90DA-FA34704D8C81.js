actual = "";
expected = "0,0,2,2,4,4,6,6,8,8,";
function g(a5) {
    for (let i7 = 0; i7 < 10; ++i7) {
    }
}
function f(a14) {
    var xa = a14;
    for (let i17 = 0; i17 < 5; ++i17) {
        var j = i17 + xa[xa];
        try { appendToActual(j); } catch (e) {}
        try { g(); } catch (e) {}
        try { appendToActual(j); } catch (e) {}
    }
}
const v35 = [0,1,2,3,4];
try { f(v35); } catch (e) {}
