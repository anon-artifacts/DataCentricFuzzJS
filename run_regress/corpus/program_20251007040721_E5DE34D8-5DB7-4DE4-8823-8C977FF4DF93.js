function testUnaryImacros() {
    function checkArg(a2) {
        o = { valueOf: checkArg };
    }
    var v = 0;
    v += +toString;
    for (let i10 = 0; i10;) {
        v += ([]).checkArg.checkArg;
    }
}
testUnaryImacros();
