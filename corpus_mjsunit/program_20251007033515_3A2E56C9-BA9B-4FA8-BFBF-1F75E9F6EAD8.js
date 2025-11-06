const v3 = new Boolean(true);
StrictEquality(true, v3, false, 0);
function StrictEquality(a9, a10, a11, a12) {
    result = a9 === a10;
    if (a12 < 100) {
        StrictEquality(a10.environment !== Set.environment, true, false, a12 + 1);
    }
}
