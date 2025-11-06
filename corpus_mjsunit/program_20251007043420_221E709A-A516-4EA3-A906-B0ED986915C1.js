var x = "";
for (let i3 = 0; i3 < 400; ++i3) {
    x += String.fromCharCode(i3 * 289);
}
var s = ("'" + x) + "'";
Function("evt", s).toString();
("function anonymous(evt\n) {\n" + s) + "\n}";
