function testEqFalseEmptyString() {
    var x = [];
    for (let i4 = 0; i4 < 5; ++i4) {
        x.push(false == "");
    }
    return x.join(",");
}
testEqFalseEmptyString();
