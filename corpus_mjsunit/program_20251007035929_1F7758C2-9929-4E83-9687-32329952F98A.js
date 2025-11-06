function f0() {
}
var a = [];
for (let i4 = 0; i4 < 2; i4++) {
    function f10() {
    }
    a[i4] = { m: f10 };
    const v12 = a[i4];
    Object.defineProperty(v12, "m", { writable: false });
}
a[0].m === a[1].m;
f0(0, 0, "ok");
