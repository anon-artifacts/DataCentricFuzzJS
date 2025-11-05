function testSwitchString() {
    var x = "asdf";
    var ret = 0;
    for (let i6 = 0; i6 < 100; ++i6) {
        switch (x) {
            case "asdf":
                x = "asd";
                ret += 1;
                break;
            case "asd":
                x = "as";
                ret += 2;
                break;
            case "as":
                x = "a";
                ret += 3;
                break;
            case "a":
                x = "foo";
                ret += 4;
                break;
            default:
                x = "asdf";
        }
    }
    return ret;
}
testSwitchString();
