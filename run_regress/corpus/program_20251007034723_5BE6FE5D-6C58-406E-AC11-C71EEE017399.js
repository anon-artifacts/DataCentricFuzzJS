function t() {
    var a = arguments;
    Object.defineProperty(a, "length", { value: 0 });
    for (let i9 = 0; i9 < 5; i9++) {
        a.length;
    }
    var desc = Object.getOwnPropertyDescriptor(a, "length");
    desc.value;
    desc.writable;
    desc.enumerable;
    desc.configurable;
}
t();
