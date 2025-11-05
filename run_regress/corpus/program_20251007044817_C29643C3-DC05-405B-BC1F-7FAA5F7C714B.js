var leak;
var c = 0;
function Ctor() {
    this.b = 2;
    this.a = c + c;
}
function test1() {
    const v10 = new Ctor();
    var a = v10;
    return a + a;
}
print(test1());
print(test1());
function f18() {
    leak = this;
    return 40;
}
const t17 = Ctor.prototype;
t17.valueOf = f18;
print(test1());
print(leak.a);
print(leak.b);
function test2() {
    const v29 = new Ctor();
    var a = v29;
    var f = a.a;
    var g = a.b;
    return (f + g) + a.a;
}
print(test2());
print(test2());
const v42 = Ctor.prototype;
function f44() {
    print("get");
    return 3;
}
function f48() {
    leak = this;
    print("set");
}
Object.defineProperty(v42, "b", { get: f44, set: f48 });
print(test2());
print(leak.a);
print(leak.b);
function test3() {
    var a = [1];
    a[1] = 2;
    return a[0] + a[1];
}
print(test3());
print(test3());
const v74 = Array.prototype;
function f76() {
    print("get");
    return 4;
}
function f80() {
    leak = this;
    print("set");
}
Object.defineProperty(v74, "1", { get: f76, set: f80 });
print(test3());
print(leak[0]);
print(leak[1]);
