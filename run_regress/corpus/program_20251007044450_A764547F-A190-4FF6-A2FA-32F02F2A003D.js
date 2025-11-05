function testApply() {
    var q = [];
    for (let i4 = 0; i4 < 10; ++i4) {
        const v11 = [5];
        Array.prototype.push.apply(q, v11);
    }
    return q.join(",");
}
testApply();
