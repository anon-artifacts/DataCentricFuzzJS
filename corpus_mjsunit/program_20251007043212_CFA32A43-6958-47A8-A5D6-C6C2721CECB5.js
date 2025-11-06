function testUndemotableBinaryOp() {
    var out = [];
    for (let i4 = 0; i4 < 5; ++i4) {
        out.push(6 - (void 0 ^ 2147483653));
    }
    return out.join(",");
}
testUndemotableBinaryOp();
