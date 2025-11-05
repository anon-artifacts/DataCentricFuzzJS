expect = 0;
summary = 0;
try { test(); } catch (e) {}
function test() {
    function f(a8, a9, a10) {
        return a10;
    }
    if (gczeal == "function") {
        let v17;
        try { v17 = f(1.5, 1.25, 1.125); } catch (e) {}
        actual = v17;
    } else {
    }
    var actual = "";
}
