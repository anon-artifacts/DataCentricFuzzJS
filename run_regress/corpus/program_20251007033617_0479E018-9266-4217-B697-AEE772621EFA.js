function foo(a1) {
    return a1 >>> a1;
}
foo(1);
foo(2);
function bar(a8) {
    try { foo(a8); } catch (e) {}
}
const v10 = () => {
    return bar(Symbol.toPrimitive);
};
v10();
