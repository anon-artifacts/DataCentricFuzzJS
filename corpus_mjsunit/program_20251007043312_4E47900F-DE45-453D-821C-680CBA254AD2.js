function f0() {
}
var a = { d: true, w: true };
Object.defineProperty(a, "d", { set: undefined });
delete a.d;
delete a.w;
a.d = true;
f0(0, 0, "ok");
