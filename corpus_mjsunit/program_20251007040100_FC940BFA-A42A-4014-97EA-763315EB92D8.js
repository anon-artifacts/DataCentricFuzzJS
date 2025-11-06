function test() {
    var count = 0;
    function leaf() {
    }
    var obj0 = {};
    function f6() {
        for (const v8 in ui8) {
            ary.unshift(this.prop0 + this.prop0);
        }
    }
    var func1 = f6;
    var ary = Array();
    const v22 = new Uint8Array(1);
    var ui8 = v22;
    var proxyHandler = {};
    function f26() {
        count++;
    }
    proxyHandler["get"] = f26;
    const v30 = new Proxy(obj0, proxyHandler);
    const v33 = !func1.call(obj0 = v30, leaf, "!");
    const v34 = { prop1: v33 };
    if (count != 2) {
        print("FAIL");
    } else {
        print("PASS");
    }
}
test();
