function assertSyntaxError(a1) {
    var msg;
    var evil = eval;
    try {
        evil(a1);
    } catch(e7) {
        if (e7 instanceof SyntaxError) {
            return;
        }
        msg = "Assertion failed: expected SyntaxError, got " + e7;
    }
    if (msg === undefined) {
        msg = "Assertion failed: expected SyntaxError, but no exception thrown";
    }
    const v19 = new Error((msg + " - ") + a1);
    throw v19;
}
