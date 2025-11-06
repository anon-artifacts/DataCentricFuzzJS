function f(a1, a2) {
    this.a = a1;
}
for (let i6 = 0; i6 < 9; ++i6) {
    f.prototype = {};
    const v14 = new f(i6, "x");
    var obj = v14;
    obj.a;
    Object.getPrototypeOf(obj);
    f.prototype;
}
