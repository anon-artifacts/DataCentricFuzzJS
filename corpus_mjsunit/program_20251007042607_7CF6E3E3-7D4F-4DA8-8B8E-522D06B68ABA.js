var obj = { A: 1, B: 2 };
function test2() {
    return obj.A;
}
function f7() {
    return 5;
}
Object.defineProperty(obj, "D", { get: f7 });
print(test2());
print(test2());
obj.A = 99;
print(test2());
