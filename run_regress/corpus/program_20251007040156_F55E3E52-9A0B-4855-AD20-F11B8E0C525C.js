var global = this;
function testWeirdDateParseOuter() {
    var vDateParts = ["11","17","2008"];
    var out = [];
    for (let i11 = 0; i11 < vDateParts.length; i11++) {
        out.push(testWeirdDateParseInner(vDateParts[i11]));
    }
    global.x = Math.random();
    return out;
}
function testWeirdDateParseInner(a24) {
    var vR = 0;
    for (let i28 = 0; i28 < a24.length; i28++) {
        var vC = a24.charAt(i28);
        if ((vC >= "0") && (vC <= "9")) {
            vR = (vR * 10) + parseInt(vC);
        }
    }
    return vR;
}
function testWeirdDateParse() {
    var result = [];
    result.push(testWeirdDateParseInner("11"));
    result.push(testWeirdDateParseInner("17"));
    result.push(testWeirdDateParseInner("2008"));
    result.push(testWeirdDateParseInner("11"));
    result.push(testWeirdDateParseInner("17"));
    result.push(testWeirdDateParseInner("2008"));
    result = result.concat(testWeirdDateParseOuter());
    result = result.concat(testWeirdDateParseOuter());
    result.push(testWeirdDateParseInner("11"));
    result.push(testWeirdDateParseInner("17"));
    result.push(testWeirdDateParseInner("2008"));
    return result.join(",");
}
testWeirdDateParse();
