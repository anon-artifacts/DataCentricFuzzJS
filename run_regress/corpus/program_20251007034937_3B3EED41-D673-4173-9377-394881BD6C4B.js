Uint8ClampedArray.g = Uint8ClampedArray;
function f1(a2) {
    try { a2.compile(f1, a2); } catch (e) {}
    return Uint8ClampedArray;
}
const v5 = RegExp();
function f6() {
    f1(v5);
}
const v9 = Symbol.toPrimitive;
const v10 = { [v9]: f6 };
String.prototype.replace.call(v10);
String.prototype.toLocaleUpperCase();
