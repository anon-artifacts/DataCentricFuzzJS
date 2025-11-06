var a = {};
function f3() {
    return 42;
}
Object.defineProperty(a, "b", { get: f3, configurable: false });
try {
    function _b() {
        return "foo";
    }
    a.__defineGetter__("b", _b);
} catch(e13) {
}
a.b;
var desc = Object.getOwnPropertyDescriptor(a, "b");
desc.configurable;
