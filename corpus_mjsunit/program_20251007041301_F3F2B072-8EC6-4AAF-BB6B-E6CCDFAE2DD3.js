var target = {};
function f3() {
    return "bar";
}
Object.defineProperty(target, "foo", { get: f3, configurable: false });
var caught = false;
function f11() {
    function f13(a14, a15) {
        function f16() {
            return "baz";
        }
        return { get: f16, configurable: false };
    }
    const v21 = new Proxy(target, { getOwnPropertyDescriptor: f13 });
    try { Object.getOwnPropertyDescriptor(v21, "foo"); } catch (e) {}
}
f11();
