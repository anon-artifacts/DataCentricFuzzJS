function test0(a1) {
    var b = -1;
    switch (a1 ? a1 * 1 : a1 * 0.1) {
        case 0:
            b = 0;
            break;
        case 1:
            b = 1;
            break;
        case 2:
            b = 2;
            break;
        case 3:
            b = 3;
    }
    return b;
}
test0(1);
test0(0);
function test1(a23, a24) {
    ++a24;
    switch (a23) {
        case "0":
            a24 += 0.1;
            break;
        case "1":
        case "2":
        case "3":
    }
    return a24;
}
test1("1", 0);
test1("1", 0);
print("pass");
