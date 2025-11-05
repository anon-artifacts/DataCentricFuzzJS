function testNumToString() {
    var r = [];
    var d = 123456789;
    for (let i6 = 0; i6 < 10; ++i6) {
        r = [d.toString(),(-d).toString(),d.toString(10),(-d).toString(10),d.toString(16),(-d).toString(16),d.toString(36),(-d).toString(36)];
    }
    return r.join(",");
}
testNumToString();
