function f0() {
}
if (typeof detachArrayBuffer === "function") {
    const v5 = () => {
        let v8;
        try { v8 = new ArrayBuffer(32); } catch (e) {}
        let buffer = v8;
        let v11;
        try { v11 = new Int32Array(buffer); } catch (e) {}
        let array = v11;
        try { detachArrayBuffer(buffer); } catch (e) {}
        try { array.sort(); } catch (e) {}
    };
    try { v5(); } catch (e) {}
}
if (typeof detachArrayBuffer === "function") {
    let detached = false;
    let v24;
    try { v24 = new Int32Array(3); } catch (e) {}
    let ta = v24;
    const v26 = () => {
        function f27(a28, a29) {
            detached = true;
            const v32 = ta?.buffer;
            try { detachArrayBuffer(v32); } catch (e) {}
            return a28 - a29;
        }
        try { ta.sort(f27); } catch (e) {}
    };
    try { v26(); } catch (e) {}
}
if (typeof newGlobal === "function") {
    let v44;
    try { v44 = new Int32Array(3); } catch (e) {}
    let ta = v44;
    let v46;
    try { v46 = newGlobal(); } catch (e) {}
    let otherGlobal = v46;
    function f48(a49, a50) {
        return a49 - a50;
    }
    const v54 = otherGlobal?.Int32Array?.prototype?.sort;
    try { v54.call(ta, f48); } catch (e) {}
}
if ((typeof newGlobal === "function") && (typeof detachArrayBuffer === "function")) {
    let detached = false;
    let v67;
    try { v67 = new Int32Array(3); } catch (e) {}
    let ta = v67;
    let v69;
    try { v69 = newGlobal(); } catch (e) {}
    let otherGlobal = v69;
    const v71 = () => {
        function f72(a73, a74) {
            detached = true;
            const v77 = ta?.buffer;
            try { detachArrayBuffer(v77); } catch (e) {}
            return a73 - a74;
        }
        const v82 = otherGlobal?.Int32Array?.prototype?.sort;
        try { v82.call(ta, f72); } catch (e) {}
    };
    try { v71(); } catch (e) {}
    otherGlobal?.TypeError;
}
const v86 = () => {
    let array = [4,3,2,1];
    const v95 = Int32Array.prototype.sort;
    try { v95.call(array); } catch (e) {}
};
v86();
const v99 = () => {
    const v102 = { a: 1, b: 2 };
    const v105 = Int32Array.prototype.sort;
    try { v105.call(v102); } catch (e) {}
};
v99();
const v108 = () => {
    const v110 = Int32Array.prototype;
    const v112 = Int32Array.prototype.sort;
    try { v112.call(v110); } catch (e) {}
};
v108();
const v115 = () => {
    const v118 = new ArrayBuffer(32);
    let buf = v118;
    const v122 = Int32Array.prototype.sort;
    try { v122.call(buf); } catch (e) {}
};
v115();
function badComparator(a126, a127) {
    if ((a126 == 99) && (a127 == 99)) {
        const v133 = new TypeError();
        throw v133;
    }
    return a126 - a127;
}
const v135 = () => {
    const v142 = new Uint8Array([99,99,99,99]);
    let array = v142;
    try { array.sort(badComparator); } catch (e) {}
};
v135();
const v146 = () => {
    const v153 = new Uint8Array([1,99,2,99]);
    let array = v153;
    try { array.sort(badComparator); } catch (e) {}
};
v146();
if (typeof f0 === "function") {
    f0(true, true);
}
