function testObjectKeys() {
    var target = { target: 1 };
    target.__proto__ = { target_proto: 2 };
    function f6(a7) {
        return ["foo","bar",Symbol("baz"),"non-enum","not-found"];
    }
    function f16(a17, a18) {
        if (a18 == "non-enum") {
            return { configurable: true };
        }
        if (a18 == "not-found") {
            return undefined;
        }
        return { enumerable: true, configurable: true };
    }
    var handler = { ownKeys: f6, getOwnPropertyDescriptor: f16 };
    const v32 = new Proxy(target, handler);
    var proxy = v32;
    ["foo","bar"];
    Object.keys(proxy);
    handler.getOwnPropertyDescriptor = undefined;
    [];
    Object.keys(proxy);
    function f42() {
        const v45 = new Number(1);
        throw v45;
    }
    handler.getOwnPropertyDescriptor = f42;
    const v46 = () => {
        let v47;
        try { v47 = Object.keys(proxy); } catch (e) {}
        return v47;
    };
    v46();
    handler.ownKeys = undefined;
    const v51 = () => {
        let v52;
        try { v52 = Object.keys(proxy); } catch (e) {}
        return v52;
    };
    v51();
    handler.getOwnPropertyDescriptor = undefined;
    ["target"];
    Object.keys(proxy);
    ["target"];
    Object.keys(target);
    const v62 = new Proxy(proxy, {});
    var proxy2 = v62;
    ["target"];
    Object.keys(proxy2);
}
testObjectKeys();
function testForSymbols() {
    var symbol = Symbol();
    const v73 = {};
    const v78 = {
        ownKeys() {
            return ["1",symbol,"2"];
        },
    };
    const v79 = new Proxy(v73, v78);
    var p = v79;
    ["1","2"];
    Object.getOwnPropertyNames(p);
    [symbol];
    Object.getOwnPropertySymbols(p);
}
testForSymbols();
function testNoProxyTraps() {
    var test_sym = Symbol("sym1");
    var test_sym2 = Symbol("sym2");
    var target = { one: 1, two: 2, [test_sym]: 4, 0: 0 };
    Object.defineProperty(target, "non-enum", { enumerable: false, value: "nope", configurable: true, writable: true });
    target.__proto__ = { target_proto: 3, 1: 1, [test_sym2]: 5 };
    const v115 = target.__proto__;
    Object.defineProperty(v115, "non-enum2", { enumerable: false, value: "nope", configurable: true, writable: true });
    const v125 = new Proxy(target, {});
    var proxy = v125;
    ["0","one","two"];
    Object.keys(proxy);
    ["0","one","two","non-enum"];
    Object.getOwnPropertyNames(proxy);
    [test_sym];
    Object.getOwnPropertySymbols(proxy);
}
testNoProxyTraps();
