function f0() {
}
const v3 = {
    get a() {
        return 1;
    },
};
var obj = v3;
const v5 = () => {
    const v7 = Object?.getOwnPropertyDescriptor;
    let v9;
    try { v9 = new v7(obj, "a"); } catch (e) {}
    v9?.get;
};
try { v5(); } catch (e) {}
const v15 = {
    set a(a14) {
    },
};
obj = v15;
const v16 = () => {
    const v18 = Object?.getOwnPropertyDescriptor;
    let v20;
    try { v20 = new v18(obj, "a"); } catch (e) {}
    v20?.set;
};
try { v16(); } catch (e) {}
const v27 = {
    get a() {
        return 1;
    },
    set a(a26) {
    },
};
obj = v27;
const v28 = () => {
    const v30 = Object?.getOwnPropertyDescriptor;
    let v32;
    try { v32 = new v30(obj, "a"); } catch (e) {}
    v32?.get;
};
try { v28(); } catch (e) {}
const v35 = () => {
    const v37 = Object?.getOwnPropertyDescriptor;
    let v39;
    try { v39 = new v37(obj, "a"); } catch (e) {}
    v39?.set;
};
try { v35(); } catch (e) {}
if (typeof f0 === "function") {
    try { f0(true, true); } catch (e) {}
}
