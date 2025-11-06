function f0() {
}
const v15 = {
    _y: "<initial y>",
    get y() {
        var rv;
        if (typeof this._y == "string") {
            rv = "got " + this._y;
        } else {
            rv = this._y;
        }
        return rv;
    },
    set y(a14) {
        this._y = a14;
    },
};
var t = v15;
test(t);
function test(a20) {
    f0("Basic Getter/ Setter test (object literal notation)");
    f0("<initial y>", a20._y, "y prototype check");
    f0("got <initial y>", a20.y, "y getter, before set");
    a20.y = "new y";
    f0("got new y", a20.y, "y getter, after set");
    a20.y = 2;
    f0(2, a20.y, "y getter, after numeric set");
    const v42 = new Date();
    var d = v42;
    a20.y = d;
    f0(d, a20.y, "y getter, after date set");
}
