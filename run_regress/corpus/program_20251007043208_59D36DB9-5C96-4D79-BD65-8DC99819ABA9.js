function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
{
    var order = [];
    let target = { x: 20, y: 42 };
    const v30 = {
        getOwnPropertyDescriptor(a15, a16) {
            order.push(`getOwnPropertyDescriptor ${a16}`);
            return { enumerable: true, configurable: true, value: 42 };
        },
        get(a24, a25, a26) {
            order.push(`get ${a25}`);
            return 42;
        },
    };
    let handler = v30;
    const v33 = new Proxy(target, handler);
    let proxy = v33;
    var result = Object.assign({}, proxy);
    shouldBe(result.x, 42);
    shouldBe(result.y, 42);
    shouldBe(order.join(","), `getOwnPropertyDescriptor x,get x,getOwnPropertyDescriptor y,get y`);
}
