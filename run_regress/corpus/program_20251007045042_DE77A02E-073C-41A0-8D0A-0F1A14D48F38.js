function f0() {
}
function testRelationalComparison(a2) {
    function ObjectV(a4) {
    }
    var ObjectV = ObjectV;
    function f6() {
        return a2;
    }
    ObjectV.prototype = { valueOf: f6 };
    function f() {
        const v10 = new ObjectV(0);
        var x = v10;
        x < "1";
    }
    try { f(); } catch (e) {}
    try { f(); } catch (e) {}
    try { f(); } catch (e) {}
}
testRelationalComparison(null);
testRelationalComparison(undefined);
testRelationalComparison(Symbol("abc"));
f0("Passed");
