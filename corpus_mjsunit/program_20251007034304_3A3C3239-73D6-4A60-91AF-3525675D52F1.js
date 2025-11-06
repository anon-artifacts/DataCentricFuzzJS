const key1 = {};
const key2 = {};
const v8 = new Set([,1]);
const set = v8;
set.has(undefined);
set.has(1);
const v19 = new Set([,1.234]);
const doubleSet = v19;
doubleSet.has(undefined);
doubleSet.has(1.234);
const v32 = new Map([[,key1],[key2]]);
const map = v32;
map.get(undefined);
map.get(key2);
const v42 = new Map([[,1.234]]);
const doublesMap = v42;
doublesMap.get(undefined);
const v50 = new WeakMap([[key1]]);
const weakmap = v50;
weakmap.get(key1);
const v54 = () => {
    const v58 = [,{}];
    let v59;
    try { v59 = new WeakSet(v58); } catch (e) {}
    return v59;
};
v54();
const v61 = () => {
    const v65 = [,1.234];
    let v66;
    try { v66 = new WeakSet(v65); } catch (e) {}
    return v66;
};
v61();
const v68 = () => {
    const v72 = [,[,key1]];
    let v73;
    try { v73 = new Map(v72); } catch (e) {}
    return v73;
};
v68();
const v75 = () => {
    const v78 = [[,key1]];
    let v79;
    try { v79 = new WeakMap(v78); } catch (e) {}
    return v79;
};
v75();
const v81 = () => {
    const v85 = [,[,key1]];
    let v86;
    try { v86 = new WeakMap(v85); } catch (e) {}
    return v86;
};
v81();
