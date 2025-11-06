function assertThrowsObjectError(a1) {
    try {
        try { a1(); } catch (e) {}
    } catch(e5) {
        e5 instanceof TypeError;
        const v10 = e5?.message;
        try { v10.includes("called on incompatible Object"); } catch (e) {}
    }
}
const v13 = () => {
    const v16 = Map.prototype;
    let v17;
    try { v17 = v16.has(0); } catch (e) {}
    return v17;
};
v13();
const v19 = () => {
    const v22 = Set.prototype;
    let v23;
    try { v23 = v22.has(0); } catch (e) {}
    return v23;
};
v19();
const v25 = () => {
    const v26 = {};
    const v28 = WeakMap.prototype;
    let v29;
    try { v29 = v28.has(v26); } catch (e) {}
    return v29;
};
v25();
const v31 = () => {
    const v32 = {};
    const v34 = WeakSet.prototype;
    let v35;
    try { v35 = v34.has(v32); } catch (e) {}
    return v35;
};
v31();
const v37 = () => {
    const v39 = Date.prototype;
    let v40;
    try { v40 = v39.getSeconds(); } catch (e) {}
    return v40;
};
v37();
const v42 = () => {
    const v44 = RegExp.prototype;
    let v45;
    try { v45 = v44.compile(); } catch (e) {}
    return v45;
};
v42();
