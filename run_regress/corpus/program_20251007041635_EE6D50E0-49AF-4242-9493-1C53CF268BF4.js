function testToStringBeforeValueOf() {
    function f1() {
        return "s";
    }
    function f3() {
        return "v";
    }
    var o = { toString: f1, valueOf: f3 };
    var a = [];
    for (let i10 = 0; i10 < 10; i10++) {
        a.push(String(o));
    }
    return a.join(",");
}
testToStringBeforeValueOf();
