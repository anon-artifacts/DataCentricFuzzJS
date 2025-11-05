function testHolePushing() {
    var a = ["foobar","baz"];
    for (let i6 = 0; i6 < 5; i6++) {
        a = [,"overwritten","new"];
    }
    var s = "[";
    for (i = 0; i < a.length; i++) {
        s += i in a ? a[i] : "<hole>";
        if (i != (a.length - 1)) {
            s += ",";
        }
    }
    return (s + "], ") + (0 in a);
}
testHolePushing();
