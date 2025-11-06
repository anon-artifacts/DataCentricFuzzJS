function f0() {
}
var BUGNUMBER = 477758;
var summary = "TM: RegExp source";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function map(a15, a16) {
        var result = [];
        for (let i20 = 0; i20 < a15.length; i20++) {
            result.push(a16(a15[i20]));
        }
        return result;
    }
    function run() {
        var patterns = [/foo/,/bar/];
        function getSource(a35) {
            return a35.source;
        }
        var patternStrings = map(patterns, getSource);
        const v44 = [patterns[0].source,patternStrings[0]] + "";
        actual += v44;
        f0(v44);
    }
    expect = "foo,foo";
    for (let i48 = 0; i48 < 4; i48++) {
        actual = "";
        run();
        f0(expect, actual, (summary + ": ") + i48);
    }
}
