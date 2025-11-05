function f0() {
    const t1 = Number.prototype;
    t1[0] = "a";
    const t3 = Number.prototype;
    t3[1] = "b";
    const v6 = Number.prototype;
    function f8() {
        'object';
        typeof this;
        return "c";
    }
    Object.defineProperty(v6, 2, { get: f8 });
    const t11 = Number.prototype;
    t11.length = 3;
    Array.prototype.includes.call(5, "a");
    Array.prototype.includes.call(5, "b");
    Array.prototype.includes.call(5, "c");
    Array.prototype.includes.call(5, "d");
}
f0();
