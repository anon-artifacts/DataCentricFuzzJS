function f1() {
    try { evalInFrame(1, "var x = 'success'"); } catch (e) {}
}
this.__defineGetter__("someProperty", f1);
function caller(a9) {
    var x = "ignominy";
    a9?.someProperty;
    return x;
}
caller(this);
