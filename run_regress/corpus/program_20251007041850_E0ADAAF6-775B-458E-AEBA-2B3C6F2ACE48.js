function reportCompare(a1) {
    return -(++a1) + "'";
}
var UBound = 0;
var actualvalues = [];
for (let i11 = 0; i11 < 6; ++i11) {
    addThis();
}
function addThis() {
    UBound++;
    for (let i22 = 0; i22 < UBound; i22++) {
        reportCompare(actualvalues[i22]);
    }
}
for (let i30 = 0; i30 < 3; ++i30) {
    addThis();
}
