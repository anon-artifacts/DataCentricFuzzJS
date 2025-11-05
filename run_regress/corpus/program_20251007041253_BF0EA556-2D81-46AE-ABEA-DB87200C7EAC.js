try {
    function f0() {
    }
    const v2 = Int8Array?.prototype;
    let v4;
    try { v4 = Object.getPrototypeOf(v2); } catch (e) {}
    const TypedArrayPrototype = v4;
    try { TypedArrayPrototype.hasOwnProperty("toString"); } catch (e) {}
    TypedArrayPrototype?.toString;
    const v11 = Array?.prototype;
    try { v11.toString(); } catch (e) {}
    const v13 = (a14) => {
        let v16;
        try { v16 = a14.hasOwnProperty("toString"); } catch (e) {}
        return !v16;
    };
    try { anyTypedArrayConstructors.every(v13); } catch (e) {}
    try { Object.getOwnPropertyDescriptor(TypedArrayPrototype, "toString"); } catch (e) {}
    const v23 = TypedArrayPrototype?.toString;
    const v27 = { value: v23, writable: true, enumerable: false, configurable: true };
    for (const v28 of anyTypedArrayConstructors) {
        const v29 = [];
        let v30;
        try { v30 = new v28(v29); } catch (e) {}
        try { v30.toString(); } catch (e) {}
        const v34 = [1];
        let v35;
        try { v35 = new v28(v34); } catch (e) {}
        try { v35.toString(); } catch (e) {}
        const v40 = [1,2];
        let v41;
        try { v41 = new v28(v40); } catch (e) {}
        try { v41.toString(); } catch (e) {}
    }
    const v51 = [-1,2,-3,4,NaN];
    const v53 = { array: v51, expected: "-1,2,-3,4,0" };
    const v54 = Int8Array?.name;
    const v61 = [-1,2,-3,4,NaN];
    const v63 = { array: v61, expected: "-1,2,-3,4,0" };
    const v65 = Int16Array?.name;
    const v72 = [-1,2,-3,4,NaN];
    const v74 = { array: v72, expected: "-1,2,-3,4,0" };
    const v76 = Int32Array?.name;
    const v81 = [255,2,3,4,NaN];
    const v83 = { array: v81, expected: "255,2,3,4,0" };
    const v85 = Uint8Array?.name;
    const v91 = [-1,2,3,4,NaN];
    const v93 = { array: v91, expected: "65535,2,3,4,0" };
    const v95 = Uint16Array?.name;
    const v101 = [-1,2,3,4,NaN];
    const v103 = { array: v101, expected: "4294967295,2,3,4,0" };
    const v105 = Uint32Array?.name;
    const v111 = [255,256,2,3,4,NaN];
    const v113 = { array: v111, expected: "255,255,2,3,4,0" };
    const v115 = Uint8ClampedArray?.name;
    const v124 = [-0,0,0.5,-0.5,NaN,Infinity,-Infinity];
    const v126 = { array: v124, expected: "0,0,0.5,-0.5,NaN,Infinity,-Infinity" };
    const v128 = Float32Array?.name;
    const v136 = [-0,0,0.5,-0.5,NaN,Infinity,-Infinity];
    const v138 = { array: v136, expected: "0,0,0.5,-0.5,NaN,Infinity,-Infinity" };
    const v140 = Float64Array?.name;
    const v141 = {
        [v54]: v53,
        [v65]: v63,
        [v76]: v74,
        [v85]: v83,
        [v95]: v93,
        [v105]: v103,
        [v115]: v113,
        [v128]: v126,
        [v140]: v138,
    };
    const testCases = v141;
    for (const v143 of anyTypedArrayConstructors) {
        let  = testCases?.[v143?.name];
        let v148;
        try { v148 = new v143(array); } catch (e) {}
        try { v148.toString(); } catch (e) {}
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
} catch(e157) {
}
