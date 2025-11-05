function CUT_NAME(a1) {
    return a1.replace("(PST)", "(Pacific Standard Time)").replace("(PDT)", "(Pacific Daylight Time)");
}
for (let i9 = 0; i9 < (4 * 60); i9++) {
    const v23 = new Date(2012, 2, 11, 0, i9, 0);
    var d = v23;
    print(CUT_NAME(d.toString()));
}
for (let i30 = 0; i30 < (4 * 60); i30++) {
    const v44 = new Date(2012, 10, 4, 0, i30, 0);
    var d = v44;
    print(CUT_NAME(d.toString()));
}
const v52 = new Date(1383672529000000);
var bug538457 = v52;
print(CUT_NAME(bug538457.toString()));
