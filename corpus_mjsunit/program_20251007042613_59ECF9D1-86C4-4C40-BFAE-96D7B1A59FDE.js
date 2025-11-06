function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v6 = "bad value: " + a1;
        let v7;
        try { v7 = new Error(v6); } catch (e) {}
        throw v7;
    }
}
function test(a9) {
    return "hello" in a9;
}
try { noInline(test); } catch (e) {}
for (let i15 = 0; i15 < 1000000; ++i15) {
    const v22 = { hello: 42 };
    let v23;
    try { v23 = test(v22); } catch (e) {}
    try { shouldBe(v23, true); } catch (e) {}
    const v28 = { hello: undefined, world: 44 };
    let v29;
    try { v29 = test(v28); } catch (e) {}
    try { shouldBe(v29, true); } catch (e) {}
    const v34 = { helloworld: 43, ok: 44 };
    let v35;
    try { v35 = test(v34); } catch (e) {}
    try { shouldBe(v35, false); } catch (e) {}
}
function selfCache(a39) {
    return "hello" in a39;
}
try { noInline(selfCache); } catch (e) {}
var object = {};
object.hello = 42;
for (let i47 = 0; i47 < 1000000; ++i47) {
    let v53;
    try { v53 = selfCache(object); } catch (e) {}
    try { shouldBe(v53, true); } catch (e) {}
}
object.world = 43;
let v57;
try { v57 = selfCache(object); } catch (e) {}
try { shouldBe(v57, true); } catch (e) {}
object.world = 43;
const v61 = { __proto__: object };
let v62;
try { v62 = selfCache(v61); } catch (e) {}
try { shouldBe(v62, true); } catch (e) {}
delete object?.hello;
let v66;
try { v66 = selfCache(object); } catch (e) {}
try { shouldBe(v66, false); } catch (e) {}
const v69 = { __proto__: object };
let v70;
try { v70 = selfCache(v69); } catch (e) {}
try { shouldBe(v70, false); } catch (e) {}
