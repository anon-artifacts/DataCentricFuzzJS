function f() {
    var _76 = {};
    for (let i4 = 0; i4 < arguments.length; i4++) {
        var typ = arguments[i4];
        _76[typ] = typ;
    }
    function f14() {
        for (let i16 = 0; i16 < arguments.length; i16++) {
            if (!(typeof arguments[i16] in _76)) {
                return false;
            }
        }
        return true;
    }
    return f14;
}
g = f("number", "boolean", "object");
g("a", "b", "c", "d", "e", "f", 2);
g(2, "a", "b", "c", "d", "e", "f", 2);
