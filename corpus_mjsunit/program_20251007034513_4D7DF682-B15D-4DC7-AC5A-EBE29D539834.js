let cnt = 0;
let reg = /./g;
const v4 = () => {
    if (cnt++ == 0) {
        const v10 = 2 ** 16;
        return { length: v10 };
    }
    cnt = 0;
    return null;
};
reg.exec = v4;
const v14 = () => {
    const v15 = () => {
    };
    let v17;
    try { v17 = ("").replace(reg, v15); } catch (e) {}
    return v17;
};
v14();
