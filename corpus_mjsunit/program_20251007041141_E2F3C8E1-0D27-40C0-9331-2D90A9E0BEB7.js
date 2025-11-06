function f0() {
}
function assertSameEntries(a2, a3) {
    a2?.length;
    a3?.length;
    for (let i7 = 0; i7 < a3?.length; ++i7) {
        a2?.[i7];
        a3?.[i7];
    }
}
function throwsTypeError(a16) {
    try {
        try { a16(); } catch (e) {}
    } catch(e18) {
        e18 instanceof TypeError;
        return true;
    }
    return false;
}
const v24 = () => {
    let v27;
    try { v27 = new Int32Array(10); } catch (e) {}
    let ta = v27;
    const v29 = ta?.buffer;
    try { detachArrayBuffer(v29); } catch (e) {}
    const v32 = () => {
        return ta?.[0];
    };
    let v34;
    try { v34 = throwsTypeError(v32); } catch (e) {}
    let throws = v34;
    const v36 = () => {
        let v39;
        try { v39 = Object.getOwnPropertyDescriptor(ta, 0); } catch (e) {}
        return v39;
    };
    try { throwsTypeError(v36); } catch (e) {}
    return throws;
};
let v41;
try { v41 = v24(); } catch (e) {}
const ACCESS_ON_DETACHED_ARRAY_BUFFER_THROWS = v41;
function maybeThrowOnDetached(a44, a45) {
    if (ACCESS_ON_DETACHED_ARRAY_BUFFER_THROWS) {
        return a45;
    }
    let v47;
    try { v47 = a44(); } catch (e) {}
    return v47;
}
for (const v52 of [0,1,10]) {
    let v55;
    try { v55 = new Array(v52); } catch (e) {}
    let v56;
    try { v56 = v55.fill(1); } catch (e) {}
    let array = v56;
    let v59;
    try { v59 = new Int32Array(array); } catch (e) {}
    let ta = v59;
    try { Object.keys(ta); } catch (e) {}
    try { Object.keys(array); } catch (e) {}
    try { Object.values(ta); } catch (e) {}
    try { Object.values(array); } catch (e) {}
    try { Object.entries(ta); } catch (e) {}
    try { Object.entries(array); } catch (e) {}
    const v68 = ta?.buffer;
    try { detachArrayBuffer(v68); } catch (e) {}
    const v71 = () => {
        let v72;
        try { v72 = Object.keys(ta); } catch (e) {}
        return v72;
    };
    const v73 = [];
    try { maybeThrowOnDetached(v71, v73); } catch (e) {}
    [];
    const v76 = () => {
        let v77;
        try { v77 = Object.values(ta); } catch (e) {}
        return v77;
    };
    const v78 = [];
    try { maybeThrowOnDetached(v76, v78); } catch (e) {}
    [];
    const v81 = () => {
        let v82;
        try { v82 = Object.entries(ta); } catch (e) {}
        return v82;
    };
    const v83 = [];
    try { maybeThrowOnDetached(v81, v83); } catch (e) {}
    [];
}
if (typeof f0 === "function") {
    try { f0(true, true); } catch (e) {}
}
