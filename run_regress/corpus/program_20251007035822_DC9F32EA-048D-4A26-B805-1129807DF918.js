function f0(a1, a2) {
    return a2;
}
Error.prepareStackTrace = f0;
function f4() {
    const v5 = {};
    const v6 = new Error();
    const v9 = v6.stack[0].getMethodName;
    try { v9.call(v5); } catch (e) {}
}
f4();
