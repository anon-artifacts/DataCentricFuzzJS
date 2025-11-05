function test2() {
    const v3 = new Array(10);
    var ary = v3;
    var d = 1;
    ary[0] = 1;
    ary[1] = 1;
    ary[2] = 1;
    ary[3] = 1;
    ary[4] = 1;
    ary[5] = 1;
    function v292101() {
        const v14 = Array.prototype;
        function f17() {
            return 30;
        }
        Object.defineProperty(v14, "4", { configurable: true, get: f17 });
        const v22 = new Object();
        var _obj = v22;
        _obj.x = (d ? ary.length : ary.length) ? ary[4] : 1;
        print("_obj.x = " + _obj.x);
    }
    v292101();
    v292101();
}
test2();
test2();
