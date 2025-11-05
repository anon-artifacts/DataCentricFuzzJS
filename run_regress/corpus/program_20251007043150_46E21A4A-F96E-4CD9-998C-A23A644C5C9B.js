var o = {};
function AddAccessorProperty() {
    function f4() {
        return 10;
    }
    Object.defineProperty(o, "a", { get: f4, configurable: true });
}
function AddPropertiesToObjectArray() {
    for (let i12 = 0; i12 < 25; i12++) {
        o["p" + i12] = 0;
    }
}
AddAccessorProperty();
AddPropertiesToObjectArray();
AddAccessorProperty();
print(o.a === 10 ? "PASSED" : "FAILED");
