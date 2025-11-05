function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v6 = "bad value: " + a1;
        let v7;
        try { v7 = new Error(v6); } catch (e) {}
        throw v7;
    }
}
function* g() {
}
var GeneratorFunctionPrototype = g?.__proto__;
function test() {
    function* gen() {
        yield 42;
    }
    return gen;
}
try { noInline(test); } catch (e) {}
function test2() {
    function* gen() {
        yield 42;
    }
    return gen;
}
try { noInline(test2); } catch (e) {}
for (let i23 = 0; i23 < 10000; ++i23) {
    let v29;
    try { v29 = test(); } catch (e) {}
    const v30 = v29?.__proto__;
    try { shouldBe(v30, GeneratorFunctionPrototype); } catch (e) {}
    let v32;
    try { v32 = test2(); } catch (e) {}
    const v33 = v32?.__proto__;
    try { shouldBe(v33, GeneratorFunctionPrototype); } catch (e) {}
}
