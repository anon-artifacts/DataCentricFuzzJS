function assertClose(a1, a2) {
    var delta = 1e-05;
    if (Math.abs(a1 - a2) > delta) {
        print(((("Failure: Expected <" + a2) + "> to be close to <") + a1) + ">");
    }
}
Math.pow(NaN, 0);
var pinf = Number.POSITIVE_INFINITY;
var ninf = Number.NEGATIVE_INFINITY;
Math.PI / 4;
Math.atan2(pinf, pinf);
-Math.PI / 4;
Math.atan2(ninf, pinf);
(3 * Math.PI) / 4;
Math.atan2(pinf, ninf);
(-3 * Math.PI) / 4;
Math.atan2(ninf, ninf);
