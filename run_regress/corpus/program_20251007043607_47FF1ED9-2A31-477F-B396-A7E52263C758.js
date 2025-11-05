function f0() {
}
function test() {
    var check = clone_object_check;
    const v6 = { x: null, y: undefined };
    try { check(v6); } catch (e) {}
    var b = {};
    var current = b;
    for (let i12 = 0; i12 < 10000; i12++) {
        var next = {};
        current["x" + i12] = next;
        current = next;
    }
    try { check(b, "deepObject"); } catch (e) {}
}
try { test(); } catch (e) {}
f0(0, 0, "ok");
