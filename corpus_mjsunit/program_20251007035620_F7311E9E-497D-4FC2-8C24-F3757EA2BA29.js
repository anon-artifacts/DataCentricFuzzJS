function body() {
    function foo(a2) {
        return (a2.length + a2.byteLength) + a2.byteOffset;
    }
    const v10 = new Int32Array(10);
    let array = v10;
    for (let i13 = 0; i13 < 100000; i13++) {
        foo(array);
    }
    Object.defineProperty(array, "length", { value: 0 });
    Object.defineProperty(array, "byteLength", { value: 0 });
    Object.defineProperty(array, "byteOffset", { value: 0 });
    if (foo(array) !== 0) {
        throw "wrong number!";
    }
}
body();
