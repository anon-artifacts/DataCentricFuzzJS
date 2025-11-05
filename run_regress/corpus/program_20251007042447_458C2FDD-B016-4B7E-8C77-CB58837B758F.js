var actual = "";
var a = [0,1];
a.x = 10;
delete a?.x;
for (const v8 in a) {
    try { appendToActual(v8); } catch (e) {}
    try { a.pop(); } catch (e) {}
}
