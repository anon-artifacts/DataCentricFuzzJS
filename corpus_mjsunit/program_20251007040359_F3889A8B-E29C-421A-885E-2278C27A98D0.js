try {
    function f0() {
    }
    function assertThrows(a2) {
        var ok = false;
        try {
            try { a2(); } catch (e) {}
        } catch(e6) {
            ok = true;
        }
        if (!ok) {
            const v13 = ("Assertion failed: " + a2) + " did not throw as expected";
            let v14;
            try { v14 = new TypeError(v13); } catch (e) {}
            throw v14;
        }
    }
    function byteArray(a16) {
        const v17 = (a18) => {
            let v20;
            try { v20 = a18.charCodeAt(0); } catch (e) {}
            return v20;
        };
        let v22;
        try { v22 = a16.split(""); } catch (e) {}
        let v23;
        try { v23 = v22.map(v17); } catch (e) {}
        return v23;
    }
    let v26;
    try { v26 = new Date(NaN); } catch (e) {}
    let v28;
    try { v28 = serialize(v26); } catch (e) {}
    const v29 = v28?.clonebuffer;
    let v30;
    try { v30 = byteArray(v29); } catch (e) {}
    var mutated = v30;
    var a = [1 / 0,-1 / 0,Number?.MIN_VALUE,-Number?.MIN_VALUE,Math?.PI,1286523948674.5,Number?.MAX_VALUE,-Number?.MAX_VALUE,8640000000000000 + 1,-(8640000000000000 + 1)];
    for (let i59 = 0; i59 < a?.length; i59++) {
        var n = a?.[i59];
        let v67;
        try { v67 = serialize(n); } catch (e) {}
        var nbuf = v67;
        const v69 = nbuf?.clonebuffer;
        let v70;
        try { v70 = byteArray(v69); } catch (e) {}
        var data = v70;
        for (let i73 = 0; i73 < 8; i73++) {
            const v79 = data?.[i73];
            mutated[i73 + 8] = v79;
        }
        const v84 = String?.fromCharCode;
        let v85;
        try { v85 = v84.apply(null, mutated); } catch (e) {}
        nbuf.clonebuffer = v85;
        function f86() {
            try { deserialize(nbuf); } catch (e) {}
        }
        try { f86(); } catch (e) {}
    }
    try { f0(0, 0); } catch (e) {}
} catch(e93) {
}
