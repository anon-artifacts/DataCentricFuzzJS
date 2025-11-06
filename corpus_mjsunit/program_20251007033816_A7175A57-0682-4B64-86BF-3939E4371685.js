function test() {
    var proxied = {};
    var fakeDesc = { value: "foo", configurable: true };
    function f8(a9, a10) {
        return ((a9 === proxied) && (a10 === "foo")) && fakeDesc;
    }
    const v17 = new Proxy(proxied, { getOwnPropertyDescriptor: f8 });
    var returnedDesc = Object.getOwnPropertyDescriptor(v17, "foo");
    return (((returnedDesc.value === fakeDesc.value) && (returnedDesc.configurable === fakeDesc.configurable)) && (returnedDesc.writable === false)) && (returnedDesc.enumerable === false);
}
if (!test()) {
    const v41 = new Error("Test failed");
    throw v41;
}
