function stringSplitIntoArrayTest() {
    var s = "a,b";
    var a = [];
    for (let i6 = 0; i6 < 10; ++i6) {
        a[i6] = s.split(",");
    }
    return a.join();
}
stringSplitIntoArrayTest();
