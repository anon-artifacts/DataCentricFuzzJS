function f1() {
    function verifyOctalThrows(a3) {
        if (a3 < 10) {
            function f6() {
            }
            f6();
        }
        if (a3 < 100) {
            function f10() {
            }
            f10();
        }
        function f12() {
        }
        f12();
    }
    for (let i15 = 1; i15 <= 255; i15++) {
        verifyOctalThrows(i15.toString(8));
    }
}
var tests = [{ name: "Octal escape sequences are not allowed in string template literals - exhaustive test", body: f1 }];
const v27 = (a28) => {
    return a28.body();
};
tests.forEach(v27);
