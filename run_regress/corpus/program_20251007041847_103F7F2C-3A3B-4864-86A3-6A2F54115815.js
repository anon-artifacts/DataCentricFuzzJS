function f1(a1) {
    var w = 3;
    if (a1) {
        function w() {
        }
    }
    return w;
}
typeof f1(true);
const v10 = f1(false);
try { v10(); } catch (e) {}
function f2(a14, a15) {
    if (a14) {
        function w() {
        }
    }
    return a15;
}
typeof f2(true, 3);
const v24 = f2(false, 3);
try { v24(); } catch (e) {}
