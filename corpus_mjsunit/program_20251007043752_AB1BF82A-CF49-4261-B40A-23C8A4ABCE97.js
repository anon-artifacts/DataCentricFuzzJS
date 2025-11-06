function testNonConfigurableProperty() {
    function ownKeys(a2) {
        return ["23","length"];
    }
    var target = [];
    const v10 = new Proxy(target, { ownKeys: ownKeys });
    var proxy = v10;
    Object.defineProperty(target, "23", { value: true });
    ["23","length"];
    Object.getOwnPropertyNames(proxy);
}
testNonConfigurableProperty();
function testPreventedExtension() {
    function ownKeys(a24) {
        return ["42","length"];
    }
    var target = [];
    const v32 = new Proxy(target, { ownKeys: ownKeys });
    var proxy = v32;
    target[42] = true;
    Object.preventExtensions(target);
    ["42","length"];
    Object.getOwnPropertyNames(proxy);
}
testPreventedExtension();
