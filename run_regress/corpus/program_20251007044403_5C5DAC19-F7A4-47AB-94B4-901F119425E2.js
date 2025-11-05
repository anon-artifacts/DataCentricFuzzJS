function write(a1) {
    print(a1);
}
write("Test case 1");
function base() {
}
const v7 = new base();
var b = v7;
const v10 = new Object();
var prop = v10;
var d = Object.create(b);
write(typeof d);
write(Object.getOwnPropertyNames(d));
write("Test case 2");
const v21 = { value: 10 };
const v23 = { value: 30 };
const v25 = { value: 70 };
var prop = { b: v21, c: v23, d: v25 };
const t18 = Array.prototype;
t18[1] = 10;
var a = Object.create(Array.prototype, prop);
print(Object.getOwnPropertyNames(a));
print(a[1]);
write("Test case 3");
const v42 = { value: 10 };
const v44 = { value: 30 };
const v46 = { value: 70 };
var prop = { b: v42, c: v44, d: v46 };
var a = Object.defineProperties({}, prop);
print(Object.getOwnPropertyNames(a));
print(a.b);
write("Test case 4");
function f58() {
    write("In getter");
}
function f61(a62) {
    write("In setter");
}
var gettersetter = { get: f58, set: f61 };
const v68 = { value: 10 };
var prop = { gs: gettersetter, bar: v68 };
var a = Object.defineProperties({}, prop);
print(Object.getOwnPropertyNames(a));
a.gs;
a.gs = 10;
write("Test case 5");
const v81 = Number.prototype;
function f83() {
    write("In getter");
}
function f86(a87) {
    write("In setter");
}
Object.defineProperty(v81, "p", { get: f83, set: f86, configurable: true, enumerable: true });
var o = 1;
o.p;
o.p = 2;
const t57 = Number.prototype;
delete t57.p;
write("Test case 6 - simple dictionary");
var obj = {};
const v104 = Object.prototype;
Object.defineProperty(v104, "data", { value: "qrs", enumerable: true, writable: true, configurable: true });
Object.defineProperty(obj, "data", { value: 10, enumerable: true, writable: true, configurable: true });
delete obj.data;
write("Is global: " + (obj.data === "qrs"));
Object.defineProperty(obj, "data", { value: 10, enumerable: true, writable: true, configurable: true });
write("Is local again: " + (obj.data === 10));
write("Test case 7 - dictionary");
var obj = {};
const v143 = Object.prototype;
Object.defineProperty(v143, "data", { value: "qrs", enumerable: true, writable: true, configurable: true });
function f152() {
}
Object.defineProperty(obj, "data", { get: f152, enumerable: true, configurable: true });
delete obj.data;
write("Is global: " + (obj.data === "qrs"));
Object.defineProperty(obj, "data", { value: 10, enumerable: true, writable: true, configurable: true });
write("Is local again: " + (obj.data === 10));
