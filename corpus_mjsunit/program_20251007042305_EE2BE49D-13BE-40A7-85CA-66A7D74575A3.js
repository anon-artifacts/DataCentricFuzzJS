function test() {
    var get = [];
    var constructor = Function();
    constructor[Symbol.species] = Object;
    function f11() {
        return null;
    }
    const v13 = { constructor: constructor, flags: "", exec: f11 };
    function f14(a15, a16) {
        get.push(a16);
        return a15[a16];
    }
    const v20 = new Proxy(v13, { get: f14 });
    var p = v20;
    RegExp.prototype[Symbol.split].call(p, "");
    return (get + "") === "constructor,flags,exec";
}
if (!test()) {
    const v36 = new Error("Test failed");
    throw v36;
}
