var x = "global";
function f() {
    var x = "function";
    try { g(); } catch (e) {}
    try {
        try { g(); } catch (e) {}
        throw "catch";
    } catch(e11) {
        function g() {
            return e11;
        }
        g();
    }
    g();
    return g;
}
const t16 = f();
t16();
