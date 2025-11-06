function testDate(a1) {
    const v3 = new Date(a1);
    let Dateobj = v3;
    let value = Dateobj.valueOf();
    let UTCstr = Dateobj.toUTCString();
    let ISOstr = Dateobj.toISOString();
    console.log(value === Date.parse(UTCstr));
    console.log(value, Date.parse(ISOstr));
}
function test() {
    testDate("0001-10-13T05:16:33Z");
    testDate("0011-10-13T05:16:33Z");
    testDate("0111-10-13T05:16:33Z");
    testDate("1111-10-13T05:16:33Z");
    testDate("-000001-11-13T19:40:33Z");
    testDate("-000011-11-13T19:40:33Z");
    testDate("-000111-11-13T19:40:33Z");
    testDate("-001111-11-13T19:40:33Z");
}
test();
