function innerLoopIntOuterDouble() {
    var n = 1000;
    var i = 0;
    var j = 0;
    var count = 0;
    var limit = 0;
    for ((() => {
            i = 1;
        })();
        i <= n;
        ++i) {
        limit = i * 1;
        for ((() => {
                j = 0;
            })();
            j < limit;
            ++j) {
            ++count;
        }
    }
    return "" + count;
}
innerLoopIntOuterDouble();
