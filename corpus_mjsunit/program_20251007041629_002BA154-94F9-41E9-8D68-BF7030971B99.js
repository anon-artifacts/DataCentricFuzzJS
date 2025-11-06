function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    a4.localeCompare(a5);
}
const v9 = new F2("stack");
const t5 = v9.constructor;
new t5("setInt32", "setInt32");
