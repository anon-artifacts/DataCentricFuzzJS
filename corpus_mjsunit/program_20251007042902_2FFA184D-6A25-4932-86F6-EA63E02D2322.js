function f() {
    try { saveStack(); } catch (e) {}
    try {
        try { saveStack(); } catch (e) {}
    } catch(e4) {
    }
    try { saveStack(); } catch (e) {}
}
function g() {
    try { f(); } catch (e) {}
}
try { g(); } catch (e) {}
try { oomTest(g); } catch (e) {}
