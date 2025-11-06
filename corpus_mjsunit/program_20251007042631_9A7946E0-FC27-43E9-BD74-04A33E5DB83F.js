function TestCase(a1, a2, a3, a4) {
    function writeHeaderToLog(a6) {
    }
    return writeHeaderToLog;
}
var SECTION = "15.1.2.4";
for (let i10 = 128; i10 < 256; i10++) {
    new TestCase(SECTION, "%" + ToHexString(i10), escape(String.fromCharCode(i10)));
}
function ToHexString(a26) {
    const v28 = new Array();
    var hex = v28;
    const v31 = a26 % 16;
    hex[hex.length] = v31;
    var string = "";
    for (let i36 = 0; i36 < hex.length; i36++) {
        switch (hex[i36]) {
            case 10:
                string += "A";
            case 11:
        }
    }
}
