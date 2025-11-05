const v2 = new Uint8Array(100);
__v_0 = v2;
const v6 = new Array(10);
array = v6;
array.__proto__ = __v_0;
const v10 = () => {
    const v12 = Array.prototype.concat;
    let v13;
    try { v13 = v12.call(array); } catch (e) {}
    return v13;
};
v10();
