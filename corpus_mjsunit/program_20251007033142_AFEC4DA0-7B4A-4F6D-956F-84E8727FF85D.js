function testSwitchUndefined() {
    var x;
    var y = 0;
    for (let i6 = 0; i6 < 5; i6++) {
        switch (x) {
            default:
                y++;
        }
    }
    return y;
}
testSwitchUndefined();
