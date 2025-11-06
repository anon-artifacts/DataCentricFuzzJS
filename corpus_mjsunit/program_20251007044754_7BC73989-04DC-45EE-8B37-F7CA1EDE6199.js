actual = "";
expected = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,";
function slice(a5, a6) {
    return a6;
}
function f() {
    var length = 20;
    var index = 0;
    function get3() {
        if ((length - index) < 3) {
            return null;
        }
        return slice(index, ++index);
    }
    var bytes = null;
    while ((() => {
            const v21 = get3();
            bytes = v21;
            return v21;
        })()) {
        try { appendToActual(bytes); } catch (e) {}
    }
}
try { f(); } catch (e) {}
