function callee() {
    try { evalInFrame(1, "x = 'success'"); } catch (e) {}
}
function caller() {
    var x = "failure";
    try { callee(); } catch (e) {}
    return x;
}
caller();
