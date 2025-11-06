function TestCase(a1, a2, a3, a4) {
    function writeHeaderToLog(a6) {
    }
    return writeHeaderToLog;
}
var SECTION = "11.7.2";
for (power = 0; power <= 32; power++) {
    shiftexp = Math.pow(2, power);
    for (addexp = 0; addexp <= 32; addexp++) {
        new TestCase(SECTION, SignedRightShift(shiftexp, addexp), shiftexp >> addexp);
    }
}
function ToInt32BitString(a35) {
    var b = "";
    return b;
}
function SignedRightShift(a39, a40) {
    a39 = ToInt32BitString(a39);
    a39 = a39.substring(0, (1 | Math) && (4294967295 + 2));
}
