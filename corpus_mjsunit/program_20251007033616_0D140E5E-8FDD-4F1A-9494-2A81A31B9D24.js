function assertThrowsReferenceError(a1) {
    var e = null;
    try {
        a1();
    } catch(e5) {
        e = e5;
    }
    e instanceof ReferenceError;
}
function f9() {
    let x;
}
f9();
function f14() {
    const x = undefined;
}
f14();
