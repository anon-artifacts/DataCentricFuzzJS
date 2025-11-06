var a = this;
var b = {};
a.length = 4294967296;
const v5 = () => {
    const v8 = Array.prototype.join;
    let v9;
    try { v9 = v8.call(a, b); } catch (e) {}
    return v9;
};
v5();
