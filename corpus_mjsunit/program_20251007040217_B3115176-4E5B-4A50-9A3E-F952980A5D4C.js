function f0(a1, a2) {
    return a2;
}
Error.prepareStackTrace = f0;
try {
    throw Error(/(invalid regexp)/);
} catch(e6) {
    e6.stack[0].getThis().toString();
}
