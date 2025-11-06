function write(a1) {
    print(a1);
}
const v6 = Array.prototype.join;
const t4 = Object.prototype;
t4.join = v6;
var n = 10;
const v11 = new Array();
var a = v11;
const v13 = new Object();
var o = v13;
for (let i16 = 0; i16 < 10; i16++) {
    const v24 = (i16 * i16) + 1;
    a[i16] = v24;
    o[i16] = v24;
}
write(o.join());
write(o.join(undefined));
write(o.join("hello"));
write(a.join(a));
write(o.join(a));
write(a.join(o));
write(o.join(o));
write(Array.prototype.join.call(a, a));
write(Array.prototype.join.call(o, a));
write(Array.prototype.join.call(a, o));
write(Array.prototype.join.call(o, o));
var a;
var arr = [10];
const v62 = Array.prototype;
function f65() {
    a = true;
    return 30;
}
Object.defineProperty(v62, "4", { configurable: true, get: f65 });
a = false;
arr.length = 6;
var f = arr.join();
print(a);
const t38 = Object.prototype;
t38["length"] = 2;
print(([""]).join.call(5));
const t41 = Object.prototype;
t41["0"] = "test";
print(([""]).join.call(5.5));
