if ("gczeal" in this) {
    gczeal(2, 1000);
    const v11 = new Array(10 * 1000);
    var a = v11;
    var i = a.length;
    while (i-- != 0) {
        switch (i % 3) {
            case 0:
                a[i] = {};
                break;
        }
    }
    gc();
}
