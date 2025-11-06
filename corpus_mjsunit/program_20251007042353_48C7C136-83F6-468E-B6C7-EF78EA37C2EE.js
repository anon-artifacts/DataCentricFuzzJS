function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
{
    const v9 = new Map();
    let map = v9;
    map.set(42, 42);
    let iterator = map[Symbol.iterator]();
    {
        let result = iterator.next();
        shouldBe(JSON.stringify(Object.getOwnPropertyNames(result).sort()), `["done","value"]`);
        shouldBe(result.done, false);
        shouldBe(JSON.stringify(result.value), `[42,42]`);
    }
    {
        let result = iterator.next();
        shouldBe(JSON.stringify(Object.getOwnPropertyNames(result).sort()), `["done","value"]`);
        shouldBe(result.done, true);
        shouldBe(result.value, undefined);
    }
}
{
    const v50 = new Map();
    let map = v50;
    let iterator = map[Symbol.iterator]();
    {
        let result = iterator.next();
        shouldBe(JSON.stringify(Object.getOwnPropertyNames(result).sort()), `["done","value"]`);
        shouldBe(result.done, true);
        shouldBe(result.value, undefined);
    }
}
