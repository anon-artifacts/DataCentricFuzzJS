try {
    let v1;
    try { v1 = new Map(); } catch (e) {}
    var m = v1;
    const v4 = Symbol?.iterator;
    let v5;
    try { v5 = m[v4](); } catch (e) {}
    var it = v5;
    try { m.clear(); } catch (e) {}
    const v21 = [["a",1],["b",2],["c",3],["d",4]];
    let v22;
    try { v22 = new Map(v21); } catch (e) {}
    m = v22;
    const v23 = Symbol?.iterator;
    let v24;
    try { v24 = m[v23](); } catch (e) {}
    it = v24;
    ["a",1];
    try { m.clear(); } catch (e) {}
    var log = "";
    const v44 = [["a",1],["b",2],["c",3],["d",4]];
    let v45;
    try { v45 = new Map(v44); } catch (e) {}
    m = v45;
    for (const v46 of m) {
        log += k + v;
        if (k == "b") {
            try { m.clear(); } catch (e) {}
        }
    }
} catch(e54) {
}
