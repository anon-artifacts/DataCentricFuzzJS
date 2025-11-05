try {
    function f0() {
    }
    const v2 = {};
    let v4;
    try { v4 = Error(); } catch (e) {}
    const v5 = v4?.lineNumber;
    const v6 = { name: "object literal", object: v2, line: v5 };
    const v8 = [];
    let v9;
    try { v9 = Error(); } catch (e) {}
    const v10 = v9?.lineNumber;
    const v11 = { name: "array literal", object: v8, line: v10 };
    const v13 = /(two|2)\s*problems/;
    let v14;
    try { v14 = Error(); } catch (e) {}
    const v15 = v14?.lineNumber;
    const v16 = { name: "regexp literal", object: v13, line: v15 };
    function Ctor() {
    }
    let v19;
    try { v19 = new Ctor(); } catch (e) {}
    let v20;
    try { v20 = Error(); } catch (e) {}
    const v21 = v20?.lineNumber;
    const v22 = { name: "new constructor", object: v19, line: v21 };
    let v25;
    try { v25 = new Object(); } catch (e) {}
    let v26;
    try { v26 = Error(); } catch (e) {}
    const v27 = v26?.lineNumber;
    const v28 = { name: "new Object", object: v25, line: v27 };
    let v31;
    try { v31 = new Array(); } catch (e) {}
    let v32;
    try { v32 = Error(); } catch (e) {}
    const v33 = v32?.lineNumber;
    const v34 = { name: "new Array", object: v31, line: v33 };
    let v37;
    try { v37 = new Date(); } catch (e) {}
    let v38;
    try { v38 = Error(); } catch (e) {}
    const v39 = v38?.lineNumber;
    const tests = [v6,v11,v16,v22,v28,v34,{ name: "new Date", object: v37, line: v39 }];
    for (const v43 of tests) {
        const v46 = "Entering test: " + name;
        try { f0(v46); } catch (e) {}
        let v50;
        try { v50 = getAllocationMetadata(object); } catch (e) {}
        let allocationSite = v50;
        try { f0(allocationSite); } catch (e) {}
        allocationSite?.line;
    }
} catch(e55) {
}
