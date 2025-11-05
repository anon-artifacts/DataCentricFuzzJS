var target = {};
Object.defineProperty(target, "foo", { value: "bar", writable: false, configurable: false });
function f9() {
    function f11(a12, a13) {
        return { value: "bar", writable: true, configurable: false };
    }
    const v19 = new Proxy(target, { getOwnPropertyDescriptor: f11 });
    try { Object.getOwnPropertyDescriptor(v19, "foo"); } catch (e) {}
}
f9();
