var o = { blah: "abc" };
function f4() {
    return 42;
}
function f6() {
}
Object.defineProperty(o, "hello", { get: f4, set: f6, enumerable: true });
for (const v11 in o) {
    print(v11.normalize());
}
print("PASS");
