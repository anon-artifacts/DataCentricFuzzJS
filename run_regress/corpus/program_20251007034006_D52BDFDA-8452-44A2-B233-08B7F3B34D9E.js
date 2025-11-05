function f0() {
}
if ("evalcx" in this) {
    var sandbox = evalcx("");
    const v10 = {
        get foo() {
            throw "FAIL";
        },
    };
    var obj = v10;
    var getter = obj.__lookupGetter__("foo");
    var desc = sandbox.Object.getOwnPropertyDescriptor(obj, "foo");
    f0(desc.get, getter, "getter is correct");
    f0(desc.set, undefined, "setter is correct");
} else {
    f0(true, true);
}
