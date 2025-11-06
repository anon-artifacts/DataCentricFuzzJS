function f0() {
}
const v2 = Object.prototype;
const v3 = { set: f0 };
const v4 = { set: f0 };
const v5 = { set: f0 };
Object.defineProperties(v2, { promise: v3, reject: v4, resolve: v5 });
class C9 extends Promise {
}
C9.all([Promise.resolve("ok")]);
C9.race([Promise.resolve("ok")]);
