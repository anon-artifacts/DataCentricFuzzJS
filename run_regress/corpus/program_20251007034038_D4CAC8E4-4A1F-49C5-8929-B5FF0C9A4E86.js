console.log("Regression test for https://webkit.org/b/140033. This test should run without crashing.");
function defineADeadFunction(a4, a5) {
    var u;
    var a = u;
    var b = a4;
    if (a4 > 1500) {
        b -= a5;
    }
    function f12() {
        return 42;
    }
    var unused = f12;
    return b;
}
var result = 0;
for (let i18 = 1; i18 < 2000; i18++) {
    result += defineADeadFunction(i18, " ");
}
