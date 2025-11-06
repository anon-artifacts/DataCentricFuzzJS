var target = { foo: "bar" };
var s1 = Symbol("moon");
var s2 = Symbol("sun");
target[s1] = "wrong";
var handler = {};
const v14 = new Proxy(target, handler);
for (const v18 of [v14,Proxy.revocable(target, handler).proxy]) {
    const v19 = () => {
        return "baz";
    };
    handler.get = v19;
    v18.foo;
    const v23 = () => {
        return undefined;
    };
    handler.get = v23;
    v18.foo;
    const v27 = () => {
        return s2;
    };
    handler.get = v27;
    v18[s1];
}
