function truthiness(a1) {
    return !(!a1);
}
function compare(a5, a6) {
    for (const v8 in a5.desc) {
        let propA = a5.desc[v8];
        let propB = a6.desc[v8];
        if (propA == propB) {
            continue;
        }
        if ((typeof propA == "boolean") && (truthiness(propA) == truthiness(propB))) {
            continue;
        }
        throw Error((((((((((a5.name + "[") + v8) + "] : ") + propA) + " != ") + a6.name) + "[") + v8) + "] : ") + propB);
    }
}
function shouldBe(a43, a44) {
    const v46 = { name: "actual", desc: a43 };
    compare(v46, { name: "expected", desc: a44 });
    const v51 = { name: "expected", desc: a44 };
    compare(v51, { name: "actual", desc: a43 });
}
function test(a56) {
    const v59 = { a: 0 };
    const v63 = {
        getOwnPropertyDescriptor(a61, a62) {
            return a56;
        },
    };
    const v64 = new Proxy(v59, v63);
    var desc = Object.getOwnPropertyDescriptor(v64, "");
    shouldBe(desc, a56);
}
test({ configurable: true });
test({ writable: true, configurable: true });
test({ writable: true, enumerable: true, configurable: true });
function f84() {
}
test({ enumerable: true, configurable: true, get: f84 });
function f89() {
}
test({ enumerable: true, configurable: true, set: f89 });
