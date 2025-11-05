try {
    function f0() {
    }
    let v3;
    try { v3 = new Boolean(true); } catch (e) {}
    let v5;
    try { v5 = new Boolean(false); } catch (e) {}
    let v8;
    try { v8 = new Number(0); } catch (e) {}
    const v10 = -0;
    let v11;
    try { v11 = new Number(v10); } catch (e) {}
    const v13 = Math?.PI;
    let v14;
    try { v14 = new Number(v13); } catch (e) {}
    let v16;
    try { v16 = new Number(2147483647); } catch (e) {}
    const v18 = -2147483647;
    let v19;
    try { v19 = new Number(v18); } catch (e) {}
    let v21;
    try { v21 = new Number(2147483648); } catch (e) {}
    const v23 = -2147483648;
    let v24;
    try { v24 = new Number(v23); } catch (e) {}
    let v26;
    try { v26 = new Number(4294967295); } catch (e) {}
    const v28 = -4294967295;
    let v29;
    try { v29 = new Number(v28); } catch (e) {}
    let v31;
    try { v31 = new Number(4294967296); } catch (e) {}
    const v33 = -4294967296;
    let v34;
    try { v34 = new Number(v33); } catch (e) {}
    const v35 = Number?.MIN_VALUE;
    let v36;
    try { v36 = new Number(v35); } catch (e) {}
    const v38 = -Number?.MIN_VALUE;
    let v39;
    try { v39 = new Number(v38); } catch (e) {}
    const v40 = Number?.MAX_VALUE;
    let v41;
    try { v41 = new Number(v40); } catch (e) {}
    const v43 = -Number?.MAX_VALUE;
    let v44;
    try { v44 = new Number(v43); } catch (e) {}
    const v47 = 1 / 0;
    let v48;
    try { v48 = new Number(v47); } catch (e) {}
    const v52 = -1 / 0;
    let v53;
    try { v53 = new Number(v52); } catch (e) {}
    const v56 = 0 / 0;
    let v57;
    try { v57 = new Number(v56); } catch (e) {}
    let v60;
    try { v60 = new String(""); } catch (e) {}
    let v62;
    try { v62 = new String("\n3䕧"); } catch (e) {}
    let v65;
    try { v65 = new Date(0); } catch (e) {}
    const v67 = -0;
    let v68;
    try { v68 = new Date(v67); } catch (e) {}
    let v70;
    try { v70 = new Date(2147483647); } catch (e) {}
    const v72 = -2147483647;
    let v73;
    try { v73 = new Date(v72); } catch (e) {}
    let v75;
    try { v75 = new Date(2147483648); } catch (e) {}
    const v77 = -2147483648;
    let v78;
    try { v78 = new Date(v77); } catch (e) {}
    let v80;
    try { v80 = new Date(4294967295); } catch (e) {}
    const v82 = -4294967295;
    let v83;
    try { v83 = new Date(v82); } catch (e) {}
    let v85;
    try { v85 = new Date(4294967296); } catch (e) {}
    const v87 = -4294967296;
    let v88;
    try { v88 = new Date(v87); } catch (e) {}
    let v90;
    try { v90 = new Date(1286523948674); } catch (e) {}
    let v92;
    try { v92 = new Date(8640000000000000); } catch (e) {}
    const v94 = -8640000000000000;
    let v95;
    try { v95 = new Date(v94); } catch (e) {}
    let v97;
    try { v97 = new Date(NaN); } catch (e) {}
    var a = [v3,v5,v8,v11,v14,v16,v19,v21,v24,v26,v29,v31,v34,v36,v39,v41,v44,v48,v53,v57,v60,v62,v65,v68,v70,v73,v75,v78,v80,v83,v85,v88,v90,v92,v95,v97];
    function primitive(a101) {
        const v102 = a101 instanceof Date;
        const v103 = +a101;
        let v104;
        try { v104 = a101.constructor(a101); } catch (e) {}
        return v102 ? v103 : v104;
    }
    for (let i107 = 0; i107 < a?.length; i107++) {
        var x = a?.[i107];
        let v115;
        try { v115 = x.toSource(); } catch (e) {}
        var expectedSource = v115;
        let v117;
        try { v117 = primitive(x); } catch (e) {}
        var expectedPrimitive = v117;
        var expectedProto = x?.__proto__;
        const v123 = Object?.prototype?.toString;
        let v124;
        try { v124 = v123.call(x); } catch (e) {}
        var expectedString = v124;
        x.expando = 1;
        x.__proto__ = {};
        let v129;
        try { v129 = serialize(x); } catch (e) {}
        let v131;
        try { v131 = deserialize(v129); } catch (e) {}
        var y = v131;
        try { y.toSource(); } catch (e) {}
        try { primitive(y); } catch (e) {}
        y?.__proto__;
        const v137 = Object?.prototype?.toString;
        try { v137.call(y); } catch (e) {}
        "expando" in y;
    }
    try { f0(0, 0); } catch (e) {}
} catch(e145) {
}
