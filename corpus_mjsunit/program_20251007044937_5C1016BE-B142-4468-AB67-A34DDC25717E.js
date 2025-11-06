function nestedExit(a1) {
    var q = 0;
    for (let i5 = 0; i5 < 10; ++i5) {
        if (a1) {
            ++q;
        }
    }
}
function nestedExitLoop() {
    for (let i14 = 0; i14 < 10; ++i14) {
        nestedExit(i14 < 7);
    }
    return "ok";
}
nestedExitLoop();
