function f0() {
    return f0;
}
class C1 extends f0 {
}
function f2(a3, a4) {
    var end = 1073741823;
    const v8 = end - 100000;
    for (let i9 = v8; i9 <= end; ++i9) {
        i9 >= v8;
    }
    return end;
}
Object.defineProperty(C1, Symbol.toPrimitive, { configurable: true, value: f2 });
class C17 {
    static [C1] = C1;
}
