function f0() {
    var o = { _f: 42 };
    function f5() {
        return this._f;
    }
    o.__defineGetter__("f", f5);
    function f9() {
        var result = 0;
        var n = 2000000;
        for (let i15 = 0; i15 < n; ++i15) {
            result += o.f;
        }
        if (result != (n * 42)) {
            throw "Error: bad result: " + result;
        }
    }
    f9();
}
f0();
