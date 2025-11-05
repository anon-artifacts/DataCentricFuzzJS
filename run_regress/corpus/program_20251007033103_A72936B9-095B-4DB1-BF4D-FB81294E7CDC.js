function f0() {
}
const v2 = -Infinity;
Number.prototype.toFixed.call(v2);
Number.prototype.toFixed.call(Infinity);
Number.prototype.toFixed.call(NaN);
const v17 = () => {
    const v18 = -Infinity;
    const v21 = Number.prototype.toFixed;
    let v22;
    try { v22 = v21.call(v18, 555); } catch (e) {}
    return v22;
};
v17();
const v25 = () => {
    const v28 = Number.prototype.toFixed;
    let v29;
    try { v29 = v28.call(Infinity, 555); } catch (e) {}
    return v29;
};
v25();
const v31 = () => {
    const v34 = Number.prototype.toFixed;
    let v35;
    try { v35 = v34.call(NaN, 555); } catch (e) {}
    return v35;
};
v31();
const v37 = () => {
    const v40 = Number.prototype.toFixed;
    let v41;
    try { v41 = v40.call("Hello"); } catch (e) {}
    return v41;
};
v37();
if (typeof f0 === "function") {
    f0(true, true);
}
