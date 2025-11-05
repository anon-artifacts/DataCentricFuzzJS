new WeakSet();
new WeakSet(undefined);
new WeakSet(null);
const v6 = () => {
    let v7;
    try { v7 = WeakSet(); } catch (e) {}
    return v7;
};
v6();
const v10 = () => {
    let v12;
    try { v12 = WeakSet(undefined); } catch (e) {}
    return v12;
};
v10();
const v14 = () => {
    let v16;
    try { v16 = WeakSet(null); } catch (e) {}
    return v16;
};
v14();
