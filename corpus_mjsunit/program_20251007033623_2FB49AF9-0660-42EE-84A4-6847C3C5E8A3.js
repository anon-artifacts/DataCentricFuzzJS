function f3() {
    return 2;
}
function f4(a3) {
    function f4() {
    }
    a3.g4 = f4;
}
function f5() {
}
var f = f5;
f.x = undefined;
const v10 = new String("x");
f4(v10);
f3();
f4(f);
for (let i15 = 0; i15 < 20; i15++) {
    f4(Math);
}
