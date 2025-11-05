try {
    function f0() {
    }
    const v5 = [[-128,127]];
    const v7 = Int8Array?.name;
    const v15 = [[-32768,-999,1942,32767]];
    const v17 = Int16Array?.name;
    const v26 = [[-2147483648,-320000,-244000,2147483647]];
    const v28 = Int32Array?.name;
    const v31 = [[255]];
    const v33 = Uint8Array?.name;
    const v38 = [[0,65535,65535]];
    const v40 = Uint16Array?.name;
    const v45 = [[0,987632,4294967295]];
    const v47 = Uint32Array?.name;
    const v50 = [[255]];
    const v52 = Uint8ClampedArray?.name;
    const v69 = [[-2147483647,-2147483646.99,-0,0,2147483646.99,NaN],[1 / undefined,NaN,Number?.NaN]];
    const v71 = Float32Array?.name;
    const v84 = [[-2147483646.99,-0,0,4147483646.99,NaN],[1 / undefined,NaN,Number?.NaN]];
    const v86 = Float64Array?.name;
    const v87 = {
        [v7]: v5,
        [v17]: v15,
        [v28]: v26,
        [v33]: v31,
        [v40]: v38,
        [v47]: v45,
        [v52]: v50,
        [v71]: v69,
        [v86]: v84,
    };
    const testCases = v87;
    function sortAllPermutations(a90, a91) {
        let v92;
        try { v92 = new a90(a91); } catch (e) {}
        let reference = v92;
        let v95;
        try { v95 = Permutations(a91); } catch (e) {}
        for (const v96 of v95) {
            let v97;
            try { v97 = new a90(v96); } catch (e) {}
            try { v97.sort(); } catch (e) {}
        }
    }
    for (const v100 of sharedTypedArrayConstructors) {
        for (const v103 of testCases?.[v100?.name]) {
            try { sortAllPermutations(v100, v103); } catch (e) {}
        }
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
} catch(e111) {
}
