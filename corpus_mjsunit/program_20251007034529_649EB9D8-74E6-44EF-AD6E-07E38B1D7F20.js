function reallyDeepNestedExit(a1) {
    var c = 0;
    var j = 0;
    for (let i7 = 0; i7 < 5; i7++) {
        for ((() => {
                j = 0;
            })();
            j < 4;
            j++) {
            c += a1[(i7 * 4) + j] == 1 ? 1 : 2;
        }
    }
    return c;
}
function testReallyDeepNestedExit() {
    var c = 0;
    const v33 = new Array(5 * 4);
    var schedule1 = v33;
    const v38 = new Array(5 * 4);
    var schedule2 = v38;
    for (let i41 = 0; i41 < (5 * 4); i41++) {
        schedule1[i41] = 0;
        schedule2[i41] = 0;
    }
    schedule1[(0 * 4) + 3] = 1;
    var schedules = [schedule1,schedule2,schedule1,schedule2,schedule2];
    for (let i60 = 0; i60 < 5; i60++) {
        c += reallyDeepNestedExit(schedules[i60]);
    }
    return c;
}
testReallyDeepNestedExit();
