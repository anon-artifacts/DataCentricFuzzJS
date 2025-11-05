try {
    let v3;
    try { v3 = gcparam("gcBytes"); } catch (e) {}
    try { gcparam("maxBytes", v3); } catch (e) {}
    try { newGlobal(""); } catch (e) {}
} catch(e8) {
}
function f9() {
}
try { oomTest(f9); } catch (e) {}
