function t() {
    var a = arguments;
    Object.defineProperty(a, "length", {});
    for (let i8 = 0; i8 < 5; i8++) {
        a.length;
    }
    var desc = Object.getOwnPropertyDescriptor(a, "length");
    desc.value;
    desc.writable;
    desc.enumerable;
    desc.configurable;
}
t();
