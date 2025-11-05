function computeInputVariants(a1) {
    var orig = "";
    var pointed = "";
    for (let i7 = 0; i7 < a1; i7++) {
        orig += (i7 % 10) + "";
        pointed += (i7 % 10) + ".";
    }
    return [orig,pointed];
}
function test() {
    var re11 = /\./g;
    for (let i25 = 0; i25 < 40; i25++) {
        var a = computeInputVariants(i25);
        a[0];
        a[1].replace(re11, "");
    }
}
test();
