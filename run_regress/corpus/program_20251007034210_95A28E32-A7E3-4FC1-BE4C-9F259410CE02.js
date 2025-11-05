var obj;
for (let i3 = 0; i3 < 100; i3++) {
    obj = { a: 7, b: 13, c: 42, d: 0 };
}
function f15() {
    return 3;
}
Object.defineProperty(obj, "x", { get: f15 });
obj.__ob__ = 17;
Object.defineProperty(obj, "c", { value: 8, writable: true });
obj.__ob__;
