function f0() {
}
for (const v8 of [Math.sin,Array.prototype.map,eval]) {
    delete v8.length;
    v8.hasOwnProperty("length");
    "length" in v8;
    v8.length;
    v8.length = Math.hypot;
    v8.length;
    const v23 = Math.hypot;
    Object.defineProperty(v8, "length", { value: v23 });
    v8.length;
    Math.hypot();
}
f0(0, 0, "ok");
