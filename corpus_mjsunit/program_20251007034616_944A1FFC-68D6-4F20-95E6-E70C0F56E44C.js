function f(a1) {
    try { Math.imul(a1); } catch (e) {}
}
const v4 = () => {
    return FAIL;
};
const v7 = Symbol.toPrimitive;
x = { [v7]: v4 };
f(1);
f(1);
const v14 = () => {
    return f(x);
};
v14();
function f(a20) {
    try { Math.pow(a20); } catch (e) {}
}
const v23 = () => {
    return FAIL;
};
const v25 = Symbol.toPrimitive;
x = { [v25]: v23 };
f(1);
f(1);
const v32 = () => {
    return f(x);
};
v32();
function f(a37) {
    try { Math.atan2(a37); } catch (e) {}
}
const v40 = () => {
    return FAIL;
};
const v42 = Symbol.toPrimitive;
x = { [v42]: v40 };
f(1);
f(1);
const v49 = () => {
    return f(x);
};
v49();
