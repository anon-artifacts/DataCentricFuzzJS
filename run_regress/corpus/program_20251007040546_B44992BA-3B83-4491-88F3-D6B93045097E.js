try {
    function testValue(a1, a2) {
        if (a1 !== a2) {
            const v11 = ((("bad value: expected:(" + a2) + "),actual:(") + a1) + ").";
            let v12;
            try { v12 = new Error(v11); } catch (e) {}
            throw v12;
        }
    }
    function identityPairs(a14) {
        function f15(a16) {
            return [a16,a16];
        }
        let v18;
        try { v18 = a14.map(f15); } catch (e) {}
        return v18;
    }
    const v21 = [0];
    let v22;
    try { v22 = identityPairs(v21); } catch (e) {}
    let v23;
    try { v23 = new Map(v22); } catch (e) {}
    var map = v23;
    var counter = 0;
    for (const v27 of map) {
        try { testValue(elm, counter); } catch (e) {}
        const v31 = elm + 1;
        const v33 = elm + 1;
        try { map.set(v31, v33); } catch (e) {}
        if (elm > 10000) {
            try { map.clear(); } catch (e) {}
        }
        ++counter;
    }
    try { testValue(counter, 10002); } catch (e) {}
    const v45 = [0,1,2,3];
    let v46;
    try { v46 = identityPairs(v45); } catch (e) {}
    let v47;
    try { v47 = new Map(v46); } catch (e) {}
    var map = v47;
    var counter = 0;
    for (const v51 of map) {
        try { testValue(elm, counter); } catch (e) {}
        try { map.clear(); } catch (e) {}
        ++counter;
    }
    try { testValue(counter, 1); } catch (e) {}
    const v62 = [0,1,2,3];
    let v63;
    try { v63 = identityPairs(v62); } catch (e) {}
    let v64;
    try { v64 = new Map(v63); } catch (e) {}
    var map = v64;
    var exp = [0,2,3];
    var counter = 0;
    for (const v73 of map) {
        const v75 = exp?.[counter];
        try { testValue(elm, v75); } catch (e) {}
        const v78 = counter + 1;
        try { map.delete(v78); } catch (e) {}
        ++counter;
    }
    try { testValue(counter, 3); } catch (e) {}
    const v87 = [0,1,2,3];
    let v88;
    try { v88 = identityPairs(v87); } catch (e) {}
    let v89;
    try { v89 = new Map(v88); } catch (e) {}
    var map = v89;
    let v91;
    try { v91 = map.keys(); } catch (e) {}
    var iter = v91;
    let v93;
    try { v93 = map.keys(); } catch (e) {}
    var iter2 = v93;
    let v95;
    try { v95 = iter2.next(); } catch (e) {}
    const v96 = v95?.value;
    try { testValue(v96, 0); } catch (e) {}
    for (const v99 of iter) {
    }
    let v100;
    try { v100 = iter.next(); } catch (e) {}
    const v101 = v100?.done;
    try { testValue(v101, true); } catch (e) {}
    let v104;
    try { v104 = iter.next(); } catch (e) {}
    const v105 = v104?.value;
    try { testValue(v105, undefined); } catch (e) {}
    try { map.clear(); } catch (e) {}
    let v115;
    try { v115 = map.set(1, 1); } catch (e) {}
    let v116;
    try { v116 = v115.set(2, 2); } catch (e) {}
    try { v116.set(3, 3); } catch (e) {}
    let v118;
    try { v118 = iter.next(); } catch (e) {}
    const v119 = v118?.done;
    try { testValue(v119, true); } catch (e) {}
    let v122;
    try { v122 = iter.next(); } catch (e) {}
    const v123 = v122?.value;
    try { testValue(v123, undefined); } catch (e) {}
    let v126;
    try { v126 = iter2.next(); } catch (e) {}
    const v127 = v126?.value;
    try { testValue(v127, 1); } catch (e) {}
    let v130;
    try { v130 = iter2.next(); } catch (e) {}
    const v131 = v130?.value;
    try { testValue(v131, 2); } catch (e) {}
    let v134;
    try { v134 = iter2.next(); } catch (e) {}
    const v135 = v134?.value;
    try { testValue(v135, 3); } catch (e) {}
    let v138;
    try { v138 = new Map(); } catch (e) {}
    var map = v138;
    try { map.set(1, 1); } catch (e) {}
    try { map.delete(1); } catch (e) {}
    function f145(a146) {
        let v149;
        try { v149 = new Error("unreeachable."); } catch (e) {}
        throw v149;
    }
    try { map.forEach(f145); } catch (e) {}
    let v151;
    try { v151 = new Map(); } catch (e) {}
    var map = v151;
    const v154 = Symbol?.iterator;
    let v155;
    try { v155 = map[v154](); } catch (e) {}
    var iter = v155;
    try { map.set(1, 1); } catch (e) {}
    try { map.delete(1); } catch (e) {}
    for (const v162 of map) {
        let v165;
        try { v165 = new Error("unreeachable."); } catch (e) {}
        throw v165;
    }
    let v166;
    try { v166 = new Map(); } catch (e) {}
    var map = v166;
    for (let i169 = 0; i169 < 5; ++i169) {
        try { map.set(i169, i169); } catch (e) {}
    }
    const v176 = map?.size;
    try { testValue(v176, 5); } catch (e) {}
    let v179;
    try { v179 = map.keys(); } catch (e) {}
    var iter = v179;
    let v181;
    try { v181 = iter.next(); } catch (e) {}
    const v182 = v181?.value;
    try { testValue(v182, 0); } catch (e) {}
    let v185;
    try { v185 = iter.next(); } catch (e) {}
    const v186 = v185?.value;
    try { testValue(v186, 1); } catch (e) {}
    let v189;
    try { v189 = iter.next(); } catch (e) {}
    const v190 = v189?.value;
    try { testValue(v190, 2); } catch (e) {}
    let v193;
    try { v193 = iter.next(); } catch (e) {}
    const v194 = v193?.value;
    try { testValue(v194, 3); } catch (e) {}
    try { map.delete(0); } catch (e) {}
    try { map.delete(1); } catch (e) {}
    try { map.delete(2); } catch (e) {}
    try { map.delete(3); } catch (e) {}
    for (let i206 = 5; i206 < 1000; ++i206) {
        try { map.set(i206, i206); } catch (e) {}
    }
    try { gc(); } catch (e) {}
    for (let i216 = 4; i216 < 1000; ++i216) {
        let v222;
        try { v222 = iter.next(); } catch (e) {}
        const v223 = v222?.value;
        try { testValue(v223, i216); } catch (e) {}
    }
    let v225;
    try { v225 = iter.next(); } catch (e) {}
    const v226 = v225?.value;
    try { testValue(v226, undefined); } catch (e) {}
} catch(e229) {
}
