var target = {};
Object.defineProperty(target, "foo", { value: "bar", configurable: false });
var caught = false;
function f10() {
    function f12(a13, a14) {
        function f15() {
            return "bar";
        }
        return { get: f15, configurable: false };
    }
    const v20 = new Proxy(target, { getOwnPropertyDescriptor: f12 });
    try { Object.getOwnPropertyDescriptor(v20, "foo"); } catch (e) {}
}
f10();
var target = {};
function f28() {
    return "bar";
}
Object.defineProperty(target, "foo", { value: f28, configurable: false });
function f33() {
    function f35(a36, a37) {
        return { value: "bar", configurable: false };
    }
    const v42 = new Proxy(target, { getOwnPropertyDescriptor: f35 });
    try { Object.getOwnPropertyDescriptor(v42, "foo"); } catch (e) {}
}
f33();
