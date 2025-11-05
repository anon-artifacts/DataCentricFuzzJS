function testCaseAbort() {
    var four = "4";
    var r = 0;
    for (let i6 = 0; i6 < 5; i6++) {
        switch (i6) {
            case four:
                r += 1;
                break;
            default:
                r += 2;
                break;
        }
    }
    return "" + r;
}
testCaseAbort();
