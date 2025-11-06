function callee() {
    try { evalInFrame(1, "x = 'success'"); } catch (e) {}
}
function caller() {
    var x = { dana: "zuul" };
    try { callee(); } catch (e) {}
    return x;
}
caller();
