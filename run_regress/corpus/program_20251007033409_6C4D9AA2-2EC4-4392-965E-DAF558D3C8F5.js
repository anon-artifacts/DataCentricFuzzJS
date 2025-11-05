function TestModifedPrototypeInObjectLiteral() {
    const v2 = Object.prototype;
    function f4() {
        return 21;
    }
    function f6() {
    }
    Object.defineProperty(v2, "c", { get: f4, set: f6 });
    var o = {};
    o.c = 7;
    o.c;
    var l = { c: 7 };
    l.c;
    const t12 = Object.prototype;
    delete t12.c;
}
TestModifedPrototypeInObjectLiteral();
