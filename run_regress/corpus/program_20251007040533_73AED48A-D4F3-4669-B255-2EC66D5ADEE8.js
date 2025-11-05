function testDenseArrayProp() {
    const t1 = ([]).__proto__;
    t1.x = 1;
    const t3 = ({}).__proto__;
    t3.x = 2;
    const v7 = [];
    const v8 = [];
    const v9 = [];
    var a = [v7,v8,v9,({}).__proto__];
    for (let i15 = 0; i15 < a.length; ++i15) {
        const v22 = a[a].x;
        try { uneval(v22); } catch (e) {}
    }
    const t13 = ([])?.__proto__;
    delete t13?.x;
    const t15 = ({})?.__proto__;
    delete t15?.x;
    return "ok";
}
try { testDenseArrayProp(); } catch (e) {}
