function f0() {
}
function testcase() {
    var proto = {};
    function f5() {
        return {};
    }
    Object.defineProperty(proto, "prop", { get: f5, enumerable: true });
    function f11() {
    }
    var ConstructFun = f11;
    ConstructFun.prototype = proto;
    const v13 = new ConstructFun();
    var child = v13;
    return Object.getOwnPropertyNames(child).indexOf("prop");
}
testcase();
-1;
f0(0, 0, "ok");
