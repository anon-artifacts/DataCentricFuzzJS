myPrint("Phase 1 - known dates");
myPrint("A --");
const v13 = new Date(-2012, 1, 2, 1, 2, 3);
testDate(v13);
const v23 = new Date(-2012, 1, 2, 1, 2, 3);
testParseDate(v23.toString());
const v34 = new Date(-2012, 1, 2, 1, 2, 3);
testParseDate(v34.toUTCString());
const v44 = new Date(-2012, 1, 2, 1, 2, 3);
testParseDate(v44.toISOString());
myPrint("B --");
const v55 = new Date(2012, 1, 2, 1, 2, 3);
testDate(v55);
const v63 = new Date(2012, 1, 2, 1, 2, 3);
testParseDate(v63.toString());
const v72 = new Date(2012, 1, 2, 1, 2, 3);
testParseDate(v72.toUTCString());
const v81 = new Date(2012, 1, 2, 1, 2, 3);
testParseDate(v81.toISOString());
myPrint("C --");
const v92 = new Date(99999, 1, 2, 1, 2, 3);
testDate(v92);
const v100 = new Date(99999, 1, 2, 1, 2, 3);
testParseDate(v100.toString());
const v109 = new Date(99999, 1, 2, 1, 2, 3);
testParseDate(v109.toUTCString());
const v118 = new Date(99999, 1, 2, 1, 2, 3);
testParseDate(v118.toISOString());
myPrint("D --");
const v130 = new Date(-99999, 1, 2, 1, 2, 3);
testDate(v130);
const v139 = new Date(-99999, 1, 2, 1, 2, 3);
testParseDate(v139.toString());
const v149 = new Date(-99999, 1, 2, 1, 2, 3);
testParseDate(v149.toUTCString());
const v159 = new Date(-99999, 1, 2, 1, 2, 3);
testParseDate(v159.toISOString());
myPrint("E --");
const v171 = new Date(-12, 1, 2, 1, 2, 3);
testDate(v171);
const v180 = new Date(-12, 1, 2, 1, 2, 3);
testParseDate(v180.toString());
const v190 = new Date(-12, 1, 2, 1, 2, 3);
testParseDate(v190.toUTCString());
const v200 = new Date(-12, 1, 2, 1, 2, 3);
testParseDate(v200.toISOString());
myPrint("F --");
const v211 = new Date(12, 1, 2, 1, 2, 3);
testDate(v211);
const v219 = new Date(12, 1, 2, 1, 2, 3);
testParseDate(v219.toString());
const v228 = new Date(12, 1, 2, 1, 2, 3);
testParseDate(v228.toUTCString());
const v237 = new Date(12, 1, 2, 1, 2, 3);
testParseDate(v237.toISOString());
myPrint("Phase 2 - parsing sample date strings");
testParseDate("Tue Feb 02 2012 01:02:03 GMT-0800 (Pacific Standard Time)");
testParseDate("Tue Feb 02 2012 01:02:03 GMT+0800 (prisec)");
testParseDate2("Tue Feb 02 2012 01:02:03 GMT+0000", " (ﾊﾇ)");
testParseDate("Tue Feb 02 2012 01:02:03 GMT-0000");
testParseDate("Tue Feb 02 2012 01:02:03 GMT+0430 (prisec@)");
testParseDate("Tue Feb 2 01:02:03 PST 2013 B.C.");
testParseDate("Thu Feb 2 01:02:03 PST 2012");
function CUT_NAME(a259) {
    return a259.replace("(PST)", "(Pacific Standard Time)").replace("(PDT)", "(Pacific Daylight Time)");
}
function testDate(a267) {
    testParseDate(a267.toString());
}
function testParseDate(a271) {
    myPrint("Date string:		" + a271);
    var d = Date.parse(a271);
    testParseDateCore(d);
}
function testParseDate2(a280, a281) {
    myPrint("Date string:		" + a280);
    var d = Date.parse(a280 + a281);
    testParseDateCore(d);
}
function testParseDateCore(a291) {
    myPrint("	 raw:		" + a291);
    const v295 = new Date(a291);
    myPrint("	 toString:	" + (a291 = v295).toString());
    myPrint("	 toUTCString:	" + a291.toUTCString());
    myPrint("	 toGMTString:	" + a291.toGMTString());
    if (isNaN(a291) === false) {
        myPrint("	 toISOString:	" + a291.toISOString());
        myPrint((((("			" + a291.getDate()) + " ") + a291.getTime()) + " ") + a291.getTimezoneOffset());
        myPrint((((("			" + a291.getFullYear()) + "/") + a291.getMonth()) + "/") + a291.getDay());
        myPrint((((((("			" + a291.getHours()) + ":") + a291.getMinutes()) + ":") + a291.getSeconds()) + ".") + a291.getMilliseconds());
    }
    myPrint("");
}
function myPrint(a359) {
    if (print !== undefined) {
        print(CUT_NAME(a359));
    } else {
        throw "no print!";
    }
}
