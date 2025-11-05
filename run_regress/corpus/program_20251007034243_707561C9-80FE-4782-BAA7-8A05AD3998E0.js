const str = "2016-01-02";
function testToUint32InSplit() {
    var re;
    function toDictMode() {
        re.x = 42;
        delete re.x;
        return "def";
    }
    re = /./g;
    const v11 = { valueOf: toDictMode };
    return re[Symbol.replace]("abc", v11);
}
function testToStringInReplace() {
    var re;
    function toDictMode() {
        re.x = 42;
        delete re.x;
        return 42;
    }
    re = /./g;
    const v24 = { valueOf: toDictMode };
    return re[Symbol.split]("abc", v24);
}
testToUint32InSplit();
testToStringInReplace();
