function shortRecursiveLoop(a1, a2) {
    for (let i4 = 0; i4 < a2; i4++) {
        if (a1) {
            shortRecursiveLoop(a2 - 1);
        }
    }
}
function testClosingRecursion() {
    shortRecursiveLoop(false, 1);
    shortRecursiveLoop(true, 3);
    return true;
}
testClosingRecursion();
