function h(a1) {
    let v2;
    try { v2 = a1.boom(); } catch (e) {}
    return v2;
}
function g() {
    var r = h({});
    return r;
}
function f() {
    var o = {};
    o.__defineGetter__("prop1", g);
    o.prop1;
}
f();
