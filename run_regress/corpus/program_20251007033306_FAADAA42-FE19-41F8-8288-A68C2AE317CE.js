function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
{
    function Empty() {
    }
    const v11 = new Proxy(Empty, {});
    let proxy = v11;
    shouldBe(Reflect.construct(Intl.Collator, [], proxy) instanceof Empty, true);
    shouldBe(Reflect.construct(Intl.Collator, [], proxy).__proto__, Empty.prototype);
    shouldBe(Reflect.construct(Intl.NumberFormat, [], proxy) instanceof Empty, true);
    shouldBe(Reflect.construct(Intl.NumberFormat, [], proxy).__proto__, Empty.prototype);
    shouldBe(Reflect.construct(Intl.DateTimeFormat, [], proxy) instanceof Empty, true);
    shouldBe(Reflect.construct(Intl.DateTimeFormat, [], proxy).__proto__, Empty.prototype);
}
{
    function Empty() {
    }
    Empty.prototype = null;
    const v55 = new Proxy(Empty, {});
    let proxy = v55;
    shouldBe(Reflect.construct(Intl.Collator, [], proxy) instanceof Intl.Collator, true);
    shouldBe(Reflect.construct(Intl.Collator, [], proxy).__proto__, Intl.Collator.prototype);
    shouldBe(Reflect.construct(Intl.NumberFormat, [], proxy) instanceof Intl.NumberFormat, true);
    shouldBe(Reflect.construct(Intl.NumberFormat, [], proxy).__proto__, Intl.NumberFormat.prototype);
    shouldBe(Reflect.construct(Intl.DateTimeFormat, [], proxy) instanceof Intl.DateTimeFormat, true);
    shouldBe(Reflect.construct(Intl.DateTimeFormat, [], proxy).__proto__, Intl.DateTimeFormat.prototype);
}
