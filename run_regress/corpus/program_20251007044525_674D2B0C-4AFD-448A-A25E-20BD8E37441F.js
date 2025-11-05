function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v6 = "bad value: " + a1;
        let v7;
        try { v7 = new Error(v6); } catch (e) {}
        throw v7;
    }
}
async function f8() {
}
var AsyncFunctionPrototype = f8?.__proto__;
function testAsyncFunctionExpression() {
    async function f12() {
        await 42;
        return 1;
    }
    return f12;
}
try { noInline(testAsyncFunctionExpression); } catch (e) {}
function testAsyncFunctionDeclaration() {
    async function asyncFn() {
        await 42;
        return 1;
    }
    return asyncFn;
}
try { noInline(testAsyncFunctionDeclaration); } catch (e) {}
function testAsyncArrowFunction() {
    const v25 = async () => {
        await 42;
        return 1;
    };
    return v25;
}
try { noInline(testAsyncArrowFunction); } catch (e) {}
for (let i31 = 0; i31 < 10000; ++i31) {
    let v37;
    try { v37 = testAsyncFunctionExpression(); } catch (e) {}
    const v38 = v37?.__proto__;
    try { shouldBe(v38, AsyncFunctionPrototype); } catch (e) {}
    let v40;
    try { v40 = testAsyncFunctionDeclaration(); } catch (e) {}
    const v41 = v40?.__proto__;
    try { shouldBe(v41, AsyncFunctionPrototype); } catch (e) {}
    let v43;
    try { v43 = testAsyncArrowFunction(); } catch (e) {}
    const v44 = v43?.__proto__;
    try { shouldBe(v44, AsyncFunctionPrototype); } catch (e) {}
}
