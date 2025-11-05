function testSwitch() {
    var x = 0;
    var ret = 0;
    for (let i6 = 0; i6 < 100; ++i6) {
        switch (x) {
            case 0:
                ret += 1;
                break;
            case 1:
                ret += 2;
                break;
            case 2:
                ret += 3;
                break;
            case 3:
                ret += 4;
                break;
            default:
                x = 0;
        }
        x++;
    }
    return ret;
}
testSwitch();
