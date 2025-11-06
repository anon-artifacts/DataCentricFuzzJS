function f0() {
}
const v2 = { get: 1 };
const v4 = { set: 1 };
const v5 = [];
const v6 = { get: v5 };
const v7 = [];
const v8 = { set: v7 };
const v9 = {};
const v10 = { get: v9 };
const v11 = {};
const v12 = { set: v11 };
const v14 = new Number();
const v15 = { get: v14 };
const v16 = new Number();
const v17 = { set: v16 };
const v20 = { get: 1, set: 1 };
const v21 = [];
const v22 = [];
const v23 = { get: v21, set: v22 };
const v24 = {};
const v25 = {};
const v26 = { get: v24, set: v25 };
const v27 = new Number();
const v28 = new Number();
const descriptors = [v2,v4,v6,v8,v10,v12,v15,v17,v20,v23,v26,{ get: v27, set: v28 }];
for (const v32 of descriptors) {
    const v33 = () => {
        const v35 = { x: v32 };
        let v37;
        try { v37 = Object.create(null, v35); } catch (e) {}
        return v37;
    };
    v33();
    const v40 = () => {
        const v41 = {};
        const v42 = { x: v32 };
        let v44;
        try { v44 = Object.defineProperties(v41, v42); } catch (e) {}
        return v44;
    };
    v40();
}
f0(true, true);
