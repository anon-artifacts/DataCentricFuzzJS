function f(a1) {
    return Math.floor(a1.x_smi) + 1;
}
f({ x_smi: 1 });
f({ x_smi: 1 });
f({ x_smi: 1 });
function f2(a20) {
    return Math.floor(a20.x_tagged) + 1;
}
const v26 = {};
var o = { x_tagged: v26 };
o.x_tagged = 1.4;
f2(o);
f2(o);
f2(o);
function f3(a37) {
    return Math.round(a37.x_smi) + 1;
}
f3({ x_smi: 1 });
f3({ x_smi: 1 });
f3({ x_smi: 1 });
function f4(a56) {
    return Math.round(a56.x_tagged) + 1;
}
f4(o);
f4(o);
f4(o);
