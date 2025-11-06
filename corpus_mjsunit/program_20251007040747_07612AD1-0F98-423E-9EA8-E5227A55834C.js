const v3 = new Uint8ClampedArray();
function f4(a5, a6) {
    if (a5 !== a6) {
        const v10 = "bad value: " + a5;
        let v11;
        try { v11 = Error(v10); } catch (e) {}
        throw v11;
    }
}
function f12() {
    function f13(a14, a15, a16) {
        let v17;
        try { v17 = a14.indexOf(a15, a16); } catch (e) {}
        return v17;
    }
    try { noInline(); } catch (e) {}
    function f20(a21, a22, a23) {
        let v24;
        try { v24 = a21.indexOf(a22, a23); } catch (e) {}
        return v24;
    }
    function f25(a26, a27, a28) {
        let v29;
        try { v29 = a26.indexOf(a27, a28); } catch (e) {}
        return v29;
    }
    function f30(a31, a32, a33) {
        let v34;
        try { v34 = a31.indexOf(a32, a33); } catch (e) {}
        return v34;
    }
    const v35 = {};
    var key = v35;
    let v38;
    try { v38 = Symbol(); } catch (e) {}
    var cocoa = v38;
    let v40;
    try { v40 = Symbol(); } catch (e) {}
    var cappuccino = v40;
    const v55 = [0,1,2,3,4,5,6,7,8,9,10,11];
    const v69 = [0,1,2,3,4.2,-1282954573,6,7,8,9,10.5,11,12,v3,8,v35];
    var stringArray = [];
    const v73 = {};
    const v74 = {};
    const v75 = {};
    const v76 = {};
    const v77 = {};
    const v78 = {};
    const v79 = {};
    const v81 = [v73,v74,v75,v76,v77,key,v78,v79,{},cocoa,cappuccino];
    for (let i83 = 0; i83 < 100000; ++i83) {
        let v91;
        try { v91 = f13(v55, null, 0); } catch (e) {}
        const v93 = -1;
        try { f4(v91, v93); } catch (e) {}
        let v97;
        try { v97 = f13(v55, undefined, 0); } catch (e) {}
        const v99 = -1;
        try { f4(v97, v99); } catch (e) {}
        let v103;
        try { v103 = f20(v69, null, 0); } catch (e) {}
        const v105 = -1;
        try { f4(v103, v105); } catch (e) {}
        let v109;
        try { v109 = f20(v69, undefined, 0); } catch (e) {}
        const v111 = -1;
        try { f4(v109, v111); } catch (e) {}
        let v115;
        try { v115 = f20(v69, null, 0); } catch (e) {}
        const v117 = -1;
        try { f4(v115, v117); } catch (e) {}
        let v121;
        try { v121 = f20(v69, undefined, 0); } catch (e) {}
        const v123 = -1;
        try { f4(v121, v123); } catch (e) {}
        let v127;
        try { v127 = f25(stringArray, null, 0); } catch (e) {}
        const v129 = -1;
        try { f4(v127, v129); } catch (e) {}
        let v133;
        try { v133 = f25(stringArray, undefined, 0); } catch (e) {}
        const v135 = -1;
        try { f4(v133, v135); } catch (e) {}
        let v138;
        try { v138 = f30(v81, cocoa, 0); } catch (e) {}
        try { f4(v138, 9); } catch (e) {}
        let v142;
        try { v142 = f30(v81, cappuccino, 0); } catch (e) {}
        try { f4(v142, 10); } catch (e) {}
    }
}
f12();
