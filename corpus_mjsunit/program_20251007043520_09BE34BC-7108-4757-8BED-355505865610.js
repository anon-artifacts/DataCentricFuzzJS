var o1 = { p1: 1 };
var o2 = { p1: 1, p2: 2 };
for (const v7 in o1) {
    for (const v8 in o2) {
        delete o2.p2;
    }
}
