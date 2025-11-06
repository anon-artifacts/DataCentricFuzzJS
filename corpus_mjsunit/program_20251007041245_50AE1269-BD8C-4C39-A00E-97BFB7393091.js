function a() {
    print("a()");
    return 1;
}
function b() {
    print("b()");
    return 2;
}
function c(a11, a12) {
    print("c(p1, p2)");
    return a11 - a12;
}
function MyClass(a18, a19) {
    print("MyClass(p1, p2)");
    this.value = a18 - a19;
}
print("Regular function call");
var result = c(a(), b());
print(result);
print("Constructor function call");
const v37 = new MyClass(a(), b());
var result = v37;
print(result.value);
