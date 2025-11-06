function f0() {
    var exception;
    try {
        var list = { a: 5 };
        for (const v6 in list) {
            x();
        }
    } catch(e9) {
    }
}
f0();
