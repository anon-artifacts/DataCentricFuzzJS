/\2/.test("1");
function rec() {
    try {
        rec();
    } catch(e5) {
        /\2/.test("1");
    }
}
rec();
