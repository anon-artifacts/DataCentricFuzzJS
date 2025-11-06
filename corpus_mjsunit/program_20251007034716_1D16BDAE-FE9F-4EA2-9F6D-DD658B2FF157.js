function throwsRangeError(a1) {
    try {
        const v3 = new Date();
        var date = v3;
        date.setTime(a1);
        var r = date.toISOString();
        const v11 = new Error("toISOString didn't throw, instead returned " + r);
        throw v11;
    } catch(e12) {
        e12 instanceof RangeError;
        "wrong error: " + e12;
        return;
    }
}
throwsRangeError(Infinity);
throwsRangeError(-Infinity);
throwsRangeError(NaN);
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
