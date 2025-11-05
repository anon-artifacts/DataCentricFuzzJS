function f3() {
    return undefined;
}
Object.defineProperty(this, "x", { configurable: true, get: f3 });
let x = "let x";
Object.defineProperty(this, "x", { value: 10 });
var desc = Object.getOwnPropertyDescriptor(this, "x");
print(x);
for (const v21 in desc) {
    print((v21 + ": ") + desc[v21]);
}
