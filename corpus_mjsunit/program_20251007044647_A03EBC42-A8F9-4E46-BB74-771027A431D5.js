var o1 = { x: 1 };
var o2 = {};
var deopt_getter = false;
var deopt_setter = false;
function f_mono(a10) {
    let v12 = a10.x;
    return 5 + v12++;
}
var to_deopt = f_mono;
var v = 1;
var g = 0;
var s = 0;
function f23() {
    g++;
    if (deopt_getter) {
        deopt_getter = false;
    }
    return v;
}
function f26(a27) {
    v = a27;
    s++;
    if (deopt_setter) {
        deopt_setter = false;
    }
}
Object.defineProperty(o2, "x", { get: f23, set: f26 });
f_mono(o2);
f_mono(o2);
deopt_setter = true;
f_mono(o2);
function f_poly(a47) {
    let v49 = a47.x;
    return 5 + v49++;
}
v = 1;
to_deopt = f_poly;
f_poly(o1);
f_poly(o1);
f_poly(o2);
f_poly(o2);
deopt_setter = true;
f_poly(o2);
v = undefined;
f_poly(o2);
function f_pre(a74) {
    let v76 = a74.x;
    return 5 + ++v76;
}
v = 1;
to_deopt = f_pre;
f_pre(o1);
f_pre(o1);
f_pre(o2);
f_pre(o2);
deopt_setter = true;
f_pre(o2);
v = undefined;
f_pre(o2);
function f_get(a100) {
    let v102 = a100.x;
    return 5 + v102++;
}
v = 1;
to_deopt = f_get;
f_get(o1);
f_get(o1);
f_get(o2);
f_get(o2);
deopt_getter = true;
f_get(o2);
v = undefined;
f_get(o2);
