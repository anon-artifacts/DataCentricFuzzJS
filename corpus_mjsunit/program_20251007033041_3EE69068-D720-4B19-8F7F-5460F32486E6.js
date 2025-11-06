var actual = "";
var a = [0,1];
for (const v6 in a) {
    try { appendToActual(v6); } catch (e) {}
    try { a.pop(); } catch (e) {}
}
