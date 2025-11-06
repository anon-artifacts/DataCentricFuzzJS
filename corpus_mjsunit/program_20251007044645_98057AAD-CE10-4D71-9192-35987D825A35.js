function TestPrototypeProxy() {
    const backup = Array.prototype.__proto__;
    const v6 = {};
    const v9 = {
        set() {
            throw 666;
        },
    };
    const v10 = new Proxy(v6, v9);
    const t9 = Array.prototype;
    t9.__proto__ = v10;
    function f() {
        return ["a",...["b","c","d"],"e"];
    }
    ["a","b","c","d","e"];
    f();
    ["a","b","c","d","e"];
    f();
    Object.setPrototypeOf(Array.prototype, backup);
}
TestPrototypeProxy();
