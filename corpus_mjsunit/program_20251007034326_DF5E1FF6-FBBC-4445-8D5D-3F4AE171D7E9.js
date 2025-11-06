function f1() {
}
const v2 = {};
Object.defineProperty(v2, Symbol.toPrimitive, { writable: true, value: f1 });
print(v2);
