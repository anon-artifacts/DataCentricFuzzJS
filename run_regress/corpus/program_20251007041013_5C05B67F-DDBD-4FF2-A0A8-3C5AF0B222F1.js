function g(a1) {
    switch (a1) {
        case 20:
        case 19:
        case 18:
        case 17:
            break;
        case 16:
            break;
        case 15:
            break;
        case 14:
            break;
        case 13:
            break;
        case 12:
        case 11:
        case 10:
        case 9:
            break;
        case 8:
            break;
        case 7:
            break;
        case 6:
            break;
        case 5:
        case 4:
        case 3:
        case 2:
        case 1:
    }
}
const v23 = new Date();
var _switchStatementStartDate = v23;
for (i = 0; i < 10000000; i++) {
    g(1);
}
const v34 = new Date();
var _switchStatementInterval = v34 - _switchStatementStartDate;
print("### TIME:", _switchStatementInterval, "ms");
