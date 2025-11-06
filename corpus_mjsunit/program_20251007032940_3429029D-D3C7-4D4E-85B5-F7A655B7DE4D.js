try {
    function f0() {
    }
    let v2;
    try { v2 = Math.random(); } catch (e) {}
    const SEED = (v2 * 10) + 1;
    function genRandomArrayBuffer(a9, a10, a11) {
        const v15 = (a10 / 8) * a9;
        let v16;
        try { v16 = new ArrayBuffer(v15); } catch (e) {}
        let buf = v16;
        let v19;
        try { v19 = new Uint8Array(buf); } catch (e) {}
        let arr = v19;
        let len = 0;
        const v23 = buf?.byteLength;
        let v25;
        try { v25 = XorShiftGenerator(a11, v23); } catch (e) {}
        for (const v26 of v25) {
            arr[len++] = v26;
        }
        return buf;
    }
    function lte(a29, a30) {
        let v32;
        try { v32 = isNaN(a30); } catch (e) {}
        if (v32) {
            return true;
        }
        return a29 <= a30;
    }
    function gte(a36, a37) {
        let v38;
        try { v38 = lte(a37, a36); } catch (e) {}
        return v38;
    }
    function cmp(a40, a41) {
        let v42;
        try { v42 = lte(a40, a41); } catch (e) {}
        let v43;
        try { v43 = gte(a40, a41); } catch (e) {}
        return v42 ? (v43 ? 0 : -1) : 1;
    }
    function SortTest(a51, a52) {
        let v53;
        try { v53 = new a51(a52); } catch (e) {}
        let typedArray = v53;
        let v56;
        try { v56 = Array.from(typedArray); } catch (e) {}
        let originalValues = v56;
        try { typedArray.sort(); } catch (e) {}
        try { Array.from(typedArray); } catch (e) {}
        let v60;
        try { v60 = Array.from(originalValues); } catch (e) {}
        try { v60.sort(cmp); } catch (e) {}
        `The array is not properly sorted! seed: ${SEED}`;
        for (let i64 = 0; i64 < (typedArray?.length - 1); i64++) {
            const v72 = typedArray?.[i64];
            const v75 = typedArray?.[i64 + 1];
            try { lte(v72, v75); } catch (e) {}
            `The array is not properly sorted! ${typedArray?.[i64]} > ${typedArray?.[i64 + 1]}, seed: ${SEED}`;
        }
        const v83 = (a84, a85) => {
            let v86;
            try { v86 = cmp(a85, a84); } catch (e) {}
            return v86;
        };
        try { typedArray.sort(v83); } catch (e) {}
        for (let i91 = typedArray?.length - 2; i91 >= 0; i91--) {
            const v97 = typedArray?.[i91];
            const v100 = typedArray?.[i91 + 1];
            try { gte(v97, v100); } catch (e) {}
            `The array is not properly sorted! ${typedArray?.[i91]} < ${typedArray?.[i91 + 1]}, seed: ${SEED}`;
        }
    }
    for (const v109 of anyTypedArrayConstructors) {
        for (const v115 of [512,256,16,0]) {
            const v118 = v109?.BYTES_PER_ELEMENT * 8;
            let v119;
            try { v119 = genRandomArrayBuffer(v115, v118, SEED); } catch (e) {}
            let source = v119;
            try { SortTest(v109, source); } catch (e) {}
        }
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
} catch(e128) {
}
