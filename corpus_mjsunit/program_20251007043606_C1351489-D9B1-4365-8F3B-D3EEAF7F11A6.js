function f() {
    var o = {};
    var p = {};
    z = o instanceof p;
    z = 3 instanceof p;
    z = p instanceof 3;
    z = 3 instanceof 4;
}
try { f(); } catch (e) {}
