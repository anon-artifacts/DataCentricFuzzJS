actual = "";
expected = "3,6,9,12,15,18,";
function slice(a5, a6) {
    return a6;
}
function f(a8) {
    var length = 20;
    function get3() {
        if ((length - a8) < 3) {
            return null;
        }
        return slice(a8 += 3, 3);
    }
    var bytes = null;
    while ((() => {
            const v20 = get3();
            bytes = v20;
            return v20;
        })()) {
        try { appendToActual(bytes); } catch (e) {}
    }
}
try { f(0); } catch (e) {}
