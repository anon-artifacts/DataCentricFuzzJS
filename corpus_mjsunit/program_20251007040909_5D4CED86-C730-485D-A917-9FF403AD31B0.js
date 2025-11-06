function lameFunc(a1, a2) {
    var lsw = (a1 & 65535) + (a2 & 65535);
    var msw = ((a1 >> 16) + (a2 >> 16)) + (lsw >> 16);
    return (msw << 16) | (lsw & 65535);
}
function runSomeTimes(a24, a25) {
    var result;
    for (let i29 = 0; i29 < a25; ++i29) {
        result = a24(42, 42);
        result = a24(42, 42);
    }
    return result;
}
for (let i41 = 0; i41 < 100; ++i41) {
    lameFunc(42, 42);
}
for (let i51 = 0; i51 < 11000; ++i51) {
    runSomeTimes(lameFunc, 1);
}
var iterations = 100;
runSomeTimes(lameFunc, iterations);
