try {
    const v6 = [1,3,5,6,9];
    let v7;
    try { v7 = new Int8Array(v6); } catch (e) {}
    let v8;
    try { v8 = new Int8Array(); } catch (e) {}
    let v10;
    try { v10 = wrapWithProto(v7, v8); } catch (e) {}
    let a = v10;
    const v12 = [...a];
    try { v12.toString(); } catch (e) {}
    const v15 = (a16) => {
        return a16 < 100;
    };
    try { a.every(v15); } catch (e) {}
    const v21 = (a22) => {
        return (a22 % 2) == 1;
    };
    let v27;
    try { v27 = a.filter(v21); } catch (e) {}
    try { v27.toString(); } catch (e) {}
    const v30 = (a31) => {
        return a31 > 3;
    };
    try { a.find(v30); } catch (e) {}
    const v36 = (a37) => {
        return (a37 % 2) == 0;
    };
    try { a.findIndex(v36); } catch (e) {}
    const v44 = (a45) => {
        return a45 * 10;
    };
    let v48;
    try { v48 = a.map(v44); } catch (e) {}
    try { v48.toString(); } catch (e) {}
    const v51 = (a52, a53) => {
        return a52 + a53;
    };
    try { a.reduce(v51, ""); } catch (e) {}
    const v58 = (a59, a60) => {
        return (("(" + a60) + a59) + ")";
    };
    try { a.reduceRight(v58, ""); } catch (e) {}
    const v69 = (a70) => {
        return (a70 % 2) == 0;
    };
    try { a.some(v69); } catch (e) {}
    let s = "";
    const v79 = (a80) => {
        s += a80;
        return a80;
    };
    try { a.forEach(v79); } catch (e) {}
    const v84 = (a85, a86) => {
        return a86 - a85;
    };
    try { a.sort(v84); } catch (e) {}
    try { a.toString(); } catch (e) {}
} catch(e91) {
}
