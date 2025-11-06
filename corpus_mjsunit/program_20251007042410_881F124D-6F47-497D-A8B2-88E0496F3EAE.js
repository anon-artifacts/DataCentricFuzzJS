{
    function isArray(a1) {
        let v3;
        try { v3 = Array.isArray(a1); } catch (e) {}
        return v3;
    }
    try { noInline(isArray); } catch (e) {}
    const v7 = [];
    const v8 = {};
    let v9;
    try { v9 = new Proxy(v7, v8); } catch (e) {}
    let proxy = v9;
    for (let i12 = 0; i12 < 100000; ++i12) {
        let v18;
        try { v18 = isArray(proxy); } catch (e) {}
        if (!v18) {
            const v21 = `bad error`;
            let v22;
            try { v22 = new Error(v21); } catch (e) {}
            throw v22;
        }
    }
}
{
    function isArray(a24) {
        let v26;
        try { v26 = Array.isArray(a24); } catch (e) {}
        return v26;
    }
    try { noInline(isArray); } catch (e) {}
    const v30 = {};
    const v31 = {};
    let v32;
    try { v32 = new Proxy(v30, v31); } catch (e) {}
    let proxy = v32;
    for (let i35 = 0; i35 < 100000; ++i35) {
        let v41;
        try { v41 = isArray(proxy); } catch (e) {}
        if (v41) {
            const v43 = `bad error`;
            let v44;
            try { v44 = new Error(v43); } catch (e) {}
            throw v44;
        }
    }
}
