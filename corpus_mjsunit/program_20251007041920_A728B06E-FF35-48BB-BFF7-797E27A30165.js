function f(a1, a2, a3) {
    this.a = a1;
    void 0;
}
for (let i9 = 0; i9 < 9; ++i9) {
    f.prototype = {};
    const v17 = new f(i9, "x");
    var obj = v17;
    obj.a;
    Object.getPrototypeOf(obj);
    f.prototype;
}
