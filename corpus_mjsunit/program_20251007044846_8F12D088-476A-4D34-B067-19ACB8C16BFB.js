var d = ArrayBuffer.prototype;
print(d);
d.aaa = 20;
const v8 = new Int8Array(1);
var a = Object.getPrototypeOf(v8.buffer);
a.foo = 20;
a.bar = 42;
print(a);
print(a.foo);
const v20 = new Int16Array(0);
var b = Object.getPrototypeOf(v20.buffer);
print(b);
for (const v25 in b) {
    print((v25 + " = ") + b[v25]);
}
print(b.foo);
var c = Object.getOwnPropertyNames(b);
for (const v35 in c) {
    print(c[v35]);
}
print(a == b);
const v42 = new Int32Array(0);
var e = v42.buffer.constructor.prototype;
print(e.foo);
for (const v49 in e) {
    print((v49 + " = ") + e[v49]);
}
var ee = Object.getOwnPropertyNames(e);
for (const v57 in ee) {
    print(ee[v57]);
}
