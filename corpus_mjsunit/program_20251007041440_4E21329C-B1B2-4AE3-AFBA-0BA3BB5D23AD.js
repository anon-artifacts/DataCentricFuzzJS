function test(a1, a2) {
    this.prop0 = a1;
}
const v6 = new test(1, 2);
var obj = v6;
Object.defineProperty(obj, "a", { value: 37, writable: true });
obj[0] = 10;
print(obj.prop0);
print(obj[0]);
