try {
    let v1;
    try { v1 = new Map(); } catch (e) {}
    var testMap = v1;
    function callback(a4, a5, a6) {
        try { testMap.set(a5, a4); } catch (e) {}
        try { a6.has(a5); } catch (e) {}
        try { a6.get(a5); } catch (e) {}
    }
    const v20 = [["a",1],["b",2.3],[false,,]];
    let v21;
    try { v21 = new Map(v20); } catch (e) {}
    var initialMap = v21;
    try { initialMap.forEach(callback); } catch (e) {}
    const v25 = Symbol?.iterator;
    let v26;
    try { v26 = initialMap[v25](); } catch (e) {}
    var iterator = v26;
    var count = 0;
    for (const v30 of testMap) {
        try { initialMap.has(k); } catch (e) {}
        try { initialMap.get(k); } catch (e) {}
        try { testMap.get(k); } catch (e) {}
        let v36;
        try { v36 = testMap.get(k); } catch (e) {}
        [k,v36];
        count++;
    }
    initialMap?.size;
    testMap?.size;
    initialMap?.size;
    var x = { abc: "test" };
    function callback2(a46, a47, a48) {
    }
    const v53 = [["a",1]];
    let v54;
    try { v54 = new Map(v53); } catch (e) {}
    initialMap = v54;
    try { initialMap.forEach(callback2, x); } catch (e) {}
    const v60 = [1,2,3];
    let v61;
    try { v61 = new Set(v60); } catch (e) {}
    var s = v61;
    function f63() {
        const v65 = Map?.prototype?.forEach;
        try { v65.call(s, callback); } catch (e) {}
    }
    try { f63(); } catch (e) {}
    var fn = 2;
    function f72() {
        try { initialMap.forEach(fn); } catch (e) {}
    }
    try { f72(); } catch (e) {}
    const v79 = [["one",1]];
    let v80;
    try { v80 = new Map(v79); } catch (e) {}
    var m = v80;
    function f82() {
        throw "FAIL";
    }
    const v84 = Symbol?.iterator;
    let v85;
    try { v85 = m[v84](); } catch (e) {}
    let v87;
    try { v87 = Object.getPrototypeOf(v85); } catch (e) {}
    v87.next = f82;
    function f88() {
        function f89() {
            throw Math;
        }
        try { m.forEach(f89); } catch (e) {}
    }
    try { f88(); } catch (e) {}
} catch(e95) {
}
