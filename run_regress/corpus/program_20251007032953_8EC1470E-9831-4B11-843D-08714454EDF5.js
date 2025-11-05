function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
{
    const v12 = {
        get x() {
            delete this.y;
            return 42;
        },
        y: 42,
    };
    let source = v12;
    let result = Object.assign({}, source);
    shouldBe(result.x, 42);
    shouldBe(result.hasOwnProperty("y"), false);
}
{
    const v28 = {
        get x() {
            return 42;
        },
        y: 42,
    };
    let source = v28;
    var store = 0;
    const v36 = {
        set x(a33) {
            store = a33;
            delete source.y;
        },
        get x() {
            return store;
        },
    };
    let target = v36;
    let result = Object.assign(target, source);
    shouldBe(result.x, 42);
    shouldBe(result.hasOwnProperty("y"), false);
}
{
    const v57 = {
        get x() {
            Object.defineProperty(source, "y", { enumerable: false });
            return 42;
        },
        y: 42,
    };
    let source = v57;
    let result = Object.assign({}, source);
    shouldBe(result.x, 42);
    shouldBe(result.hasOwnProperty("y"), false);
}
{
    const v73 = {
        get x() {
            return 42;
        },
        y: 42,
    };
    let source = v73;
    var store = 0;
    const v85 = {
        set x(a78) {
            store = a78;
            Object.defineProperty(source, "y", { enumerable: false });
        },
        get x() {
            return store;
        },
    };
    let target = v85;
    let result = Object.assign(target, source);
    shouldBe(result.x, 42);
    shouldBe(result.hasOwnProperty("y"), false);
}
