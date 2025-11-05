const v3 = /(v+)/ydi;
const v4 = /a{1,2}?(a)\1+/mygsu;
const v5 = /(a)gl/mu;
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
}
new F6("valueOf", "valueOf", "valueOf", "n");
const v13 = new F6("valueOf", "valueOf", "n", v3);
const v14 = new F6("n", "valueOf", "valueOf", F6);
const v17 = new Uint8ClampedArray(0);
new Uint8ClampedArray(9);
new Uint8ClampedArray(10);
function f22(a23) {
}
function f24(a25) {
}
function f26(a27) {
}
function f28(a29) {
}
const v32 = {};
const v33 = {
    a: "",
    h: v17,
    f: v4,
    [v5]: 9,
    ...v13,
    b: false,
    c: v32,
};
var object = v33;
function f35(a36) {
    return this;
}
object.f = f35;
function f38(a39) {
    f22(a39);
    f24();
    f26(a39);
    f28(a39);
    a39.a.b == "";
    const t36 = object.f("B");
    t36.a = "";
    const t43 = object.f("C").c;
    t43.display = "A";
}
const v56 = { b: "" };
try {
    f24(v14);
} catch(e58) {
}
f24(Uint8ClampedArray);
%PrepareFunctionForOptimization(f24);
f24(Uint8ClampedArray);
f24(Uint8ClampedArray);
%OptimizeMaglevOnNextCall(f24);
f24(Uint8ClampedArray);
const v64 = {
    get h() {
    },
    a: v56,
};
var x = v64;
for (let i67 = 0; i67 < 20000; i67++) {
    f38(x);
}
