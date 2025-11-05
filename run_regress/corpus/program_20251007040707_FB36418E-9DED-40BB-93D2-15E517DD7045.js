function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
const v9 = Array.prototype;
const v20 = {
    get() {
        const v14 = new Error("out");
        throw v14;
    },
    set(a16) {
        const v19 = new Error("out");
        throw v19;
    },
};
Object.defineProperty(v9, "0", v20);
{
    let object = { a: 42, b: 42, c: 42 };
    {
        let result = Object.keys(object);
        shouldBe(JSON.stringify(result), `["a","b","c"]`);
    }
    {
        let result = Object.values(object);
        shouldBe(JSON.stringify(result), `[42,42,42]`);
    }
}
{
    const v42 = Symbol.iterator;
    let object = { [v42]: 42, b: 42, c: 42 };
    {
        let result = Object.getOwnPropertyNames(object);
        shouldBe(JSON.stringify(result), `["b","c"]`);
    }
    {
        let result = Object.getOwnPropertySymbols(object);
        shouldBe(result.length, 1);
        shouldBe(result[0], Symbol.iterator);
    }
}
