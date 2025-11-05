var i;
function f2(a3) {
    if (a3 > 98) {
        function f6(a7) {
            return true;
        }
        uceFault = f6;
    }
    return false;
}
var uceFault = f2;
var sqrt5 = Math.sqrt(5);
var phi = (1 + sqrt5) / 2;
function range_analysis_truncate(a22) {
    var fib = (Math.pow(phi, a22) - Math.pow(1 - phi, a22)) / sqrt5;
    var x = (fib >> 8) * (fib >> 6);
    if (uceFault(a22) || uceFault(a22)) {
        (fib >> 8) * (fib >> 6);
    }
    return x | 0;
}
for ((() => {
        i = 0;
    })();
    i < 100;
    i++) {
    range_analysis_truncate(i);
}
