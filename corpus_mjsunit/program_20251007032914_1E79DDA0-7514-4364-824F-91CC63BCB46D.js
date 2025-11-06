function* f0() {
    var _a = "pas";
    function a() {
        return _a;
    }
    return a() + arguments[0];
}
var o = { gf: f0 };
function test() {
    for (let i12 = 0; i12 < 3; i12 += 1) {
        var g = o.gf("sed");
        const v22 = g.next().value;
        try { WScript.Echo(v22); } catch (e) {}
    }
}
try { test(); } catch (e) {}
