function x() {
}
try { evaluate("var x = JSON.stringify({});"); } catch (e) {}
try { evaluate("for (a = 0; a < 13; ++a) { if (!x) { } }"); } catch (e) {}
