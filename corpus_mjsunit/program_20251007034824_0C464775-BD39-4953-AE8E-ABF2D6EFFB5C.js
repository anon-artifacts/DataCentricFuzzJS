try {
    function test(a1) {
        const v3 = String.prototype;
        Symbol.iterator;
        var it = v3[v3].call(a1);
        var s = String(a1);
        for (let i13 = 0, i14 = s.length; i13 < i14;) {
            i13++;
            var r = s[s];
            let v24;
            try { v24 = isHighSurrogate(r); } catch (e) {}
            const v26 = v24 && (i13 < i14);
            const v27 = s?.[s];
            let v29;
            try { v29 = isLowSurrogate(v27); } catch (e) {}
            if (v26 && v29) {
                i13++;
                r += s?.[s];
            }
        }
    }
    const v34 = () => {
        return "";
    };
    test({ toString: v34 });
    const v38 = () => {
        return "xyz";
    };
    const v40 = { toString: v38 };
    try { test(v40); } catch (e) {}
    const v42 = () => {
        return "𒍅";
    };
    const v44 = { toString: v42 };
    try { test(v44); } catch (e) {}
    const v46 = () => {
        return "";
    };
    const v48 = { valueOf: v46 };
    try { test(v48); } catch (e) {}
    const v50 = () => {
        return "xyz";
    };
    const v52 = { valueOf: v50 };
    try { test(v52); } catch (e) {}
    const v54 = () => {
        return "𒍅";
    };
    const v56 = { valueOf: v54 };
    try { test(v56); } catch (e) {}
} catch(e58) {
}
