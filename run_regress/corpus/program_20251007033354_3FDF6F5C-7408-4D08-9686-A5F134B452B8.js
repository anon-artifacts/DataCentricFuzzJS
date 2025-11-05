try {
    try { ("ΚΟΣΜΟΣ ΚΟΣΜΟΣ").toLowerCase(); } catch (e) {}
    let v5;
    try { v5 = ("A").charCodeAt(0); } catch (e) {}
    var A_CODE = v5;
    let v9;
    try { v9 = ("Z").charCodeAt(0); } catch (e) {}
    var Z_CODE = v9;
    let v13;
    try { v13 = ("a").charCodeAt(0); } catch (e) {}
    var a_CODE = v13;
    let v17;
    try { v17 = ("z").charCodeAt(0); } catch (e) {}
    var z_CODE = v17;
    function charCodeToLower(a20) {
        if ((A_CODE <= a20) && (a20 <= Z_CODE)) {
            return (a20 + a_CODE) - A_CODE;
        }
        return a20;
    }
    function charCodeToUpper(a27) {
        if ((a_CODE <= a27) && (a27 <= z_CODE)) {
            return a27 - (a_CODE - A_CODE);
        }
        return a27;
    }
    function test(a34) {
        var str = "";
        var strLower = "";
        var strUpper = "";
        for (let i42 = 0; i42 < a34; i42++) {
            let v49;
            try { v49 = Math.random(); } catch (e) {}
            const v50 = 127 * v49;
            let v51;
            try { v51 = Math.round(v50); } catch (e) {}
            var c = v51;
            let v54;
            try { v54 = String.fromCharCode(c); } catch (e) {}
            str += v54;
            let v55;
            try { v55 = charCodeToLower(c); } catch (e) {}
            let v56;
            try { v56 = String.fromCharCode(v55); } catch (e) {}
            strLower += v56;
            let v57;
            try { v57 = charCodeToUpper(c); } catch (e) {}
            let v58;
            try { v58 = String.fromCharCode(v57); } catch (e) {}
            strUpper += v58;
        }
        let v60;
        try { v60 = f2(str); } catch (e) {}
        str = v60;
        let v61;
        try { v61 = f2(strLower); } catch (e) {}
        strLower = v61;
        let v62;
        try { v62 = f2(strUpper); } catch (e) {}
        strUpper = v62;
        try { str.toLowerCase(); } catch (e) {}
        try { str.toUpperCase(); } catch (e) {}
        strLower + strLower;
        const v66 = str + str;
        try { v66.toLowerCase(); } catch (e) {}
        strUpper + strUpper;
        const v69 = str + str;
        try { v69.toUpperCase(); } catch (e) {}
        try { strLower.substring(1); } catch (e) {}
        let v74;
        try { v74 = str.substring(1); } catch (e) {}
        try { v74.toLowerCase(); } catch (e) {}
        try { strUpper.substring(1); } catch (e) {}
        let v79;
        try { v79 = str.substring(1); } catch (e) {}
        try { v79.toUpperCase(); } catch (e) {}
        try { str.toLowerCase(); } catch (e) {}
        try { str.toUpperCase(); } catch (e) {}
    }
    for (let i84 = 1; i84 <= 128; i84 <<= 1) {
    }
    {
        for (let i91 = 0; i91 < 8; i91++) {
            for (let i98 = 0; i98 < 3; i98++) {
                const v105 = i + i91;
                try { test(v105); } catch (e) {}
            }
        }
    }
} catch(e107) {
}
