const v2 = [1,"hi"];
const v5 = Array.prototype.toSource;
try { v5.call(v2); } catch (e) {}
const v11 = { 1: 10, 0: 42, length: 2 };
const v13 = Array.prototype.toSource;
try { v13.call(v11); } catch (e) {}
const v19 = { 1: 10, 0: 42, length: 1 };
const v21 = Array.prototype.toSource;
try { v21.call(v19); } catch (e) {}
const v24 = () => {
    const v27 = Array.prototype.toSource;
    let v28;
    try { v28 = v27.call("someString"); } catch (e) {}
    return v28;
};
v24();
const v31 = () => {
    const v34 = Array.prototype.toSource;
    let v35;
    try { v35 = v34.call(42); } catch (e) {}
    return v35;
};
v31();
const v37 = () => {
    const v40 = Array.prototype.toSource;
    let v41;
    try { v41 = v40.call(undefined); } catch (e) {}
    return v41;
};
v37();
