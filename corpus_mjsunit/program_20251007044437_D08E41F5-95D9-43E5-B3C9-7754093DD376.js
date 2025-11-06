const types = [Array,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Uint8ClampedArray,Float32Array,Float64Array];
for (const v12 of types) {
    const v13 = new v12();
    const array = v13;
    array[0] = 1;
    array[1] = 2;
    array[2] = 3;
    array.sort();
    array.sort(undefined);
    const v21 = () => {
    };
    array.sort(v21);
    const v23 = () => {
        try { array.sort(null); } catch (e) {}
    };
    v23();
    const v28 = () => {
        try { array.sort(true); } catch (e) {}
    };
    v28();
    const v32 = () => {
        try { array.sort(false); } catch (e) {}
    };
    v32();
    const v36 = () => {
        try { array.sort(""); } catch (e) {}
    };
    v36();
    const v40 = () => {
        try { array.sort(0); } catch (e) {}
    };
    v40();
    const v44 = () => {
        try { array.sort(42); } catch (e) {}
    };
    v44();
    const v48 = () => {
        const v49 = [];
        try { array.sort(v49); } catch (e) {}
    };
    v48();
    const v52 = () => {
        const v53 = /./;
        try { array.sort(v53); } catch (e) {}
    };
    v52();
    const v56 = () => {
        const v57 = {};
        try { array.sort(v57); } catch (e) {}
    };
    v56();
    const v60 = () => {
        const v62 = Symbol();
        try { array.sort(v62); } catch (e) {}
    };
    v60();
}
const v65 = () => {
    const v69 = Array.prototype.sort;
    try { v69.call(null, 42); } catch (e) {}
};
v65();
try {
    const v76 = Array.prototype.sort;
    try { v76.call(null, 42); } catch (e) {}
} catch(e78) {
    e78?.message;
}
