actual = "";
expected = "undefined,undefined,undefined,undefined,undefined,";
function h() {
    for (let i6 = 0; i6 < 5; ++i6) {
        const v13 = arguments?.[100];
        try { appendToActual(v13); } catch (e) {}
    }
}
try { h(); } catch (e) {}
