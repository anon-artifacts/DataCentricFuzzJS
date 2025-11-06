function f() {
    const v3 = new ArrayBuffer(64);
    var b1 = v3;
    for (let i6 = 0; i6 < 100; ++i6) {
        Object.defineProperty(b1, "x", { configurable: true, enumerable: true, writable: true, value: i6 });
        b1.x;
    }
}
f();
