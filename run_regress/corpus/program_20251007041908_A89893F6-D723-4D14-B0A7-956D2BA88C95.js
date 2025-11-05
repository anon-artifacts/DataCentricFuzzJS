function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v8 = new Error(`bad value: ${String(a1)}`);
        throw v8;
    }
}
function shouldThrow(a10, a11) {
    var errorThrown = false;
    var error = null;
    try {
        a10();
    } catch(e17) {
        errorThrown = true;
        error = e17;
    }
    if (!errorThrown) {
        const v22 = new Error("not thrown");
        throw v22;
    }
    if (String(error) !== a11) {
        const v29 = new Error(`bad error: ${String(error)}`);
        throw v29;
    }
}
const v32 = [,];
const v34 = new Proxy(v32, {});
shouldBe(JSON.stringify(v34), `[null]`);
function f39() {
}
const v40 = [f39];
const v42 = new Proxy(v40, {});
shouldBe(JSON.stringify(v42), `[null]`);
const v47 = { value: undefined };
const v49 = new Proxy(v47, {});
shouldBe(JSON.stringify(v49), `{}`);
function f53() {
    const v54 = [];
    const v64 = {
        get(a56, a57) {
            if (a57 === "length") {
                const v62 = new Error("ok");
                throw v62;
            }
            return 42;
        },
    };
    const v65 = new Proxy(v54, v64);
    let proxy = v65;
    JSON.stringify(proxy);
}
shouldThrow(f53, `Error: ok`);
