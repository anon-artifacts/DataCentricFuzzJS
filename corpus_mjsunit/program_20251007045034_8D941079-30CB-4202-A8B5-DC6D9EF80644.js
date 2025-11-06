try {
    try { console.log("Test to ensure that we handle caching of prototype chains containing dictionaries."); } catch (e) {}
    function f3() {
    }
    var Test = f3;
    var methodCount = 65;
    for (let i8 = 0; i8 < methodCount; i8++) {
        function f13() {
        }
        const t9 = Test?.prototype;
        t9["myMethod" + i8] = f13;
    }
    let v17;
    try { v17 = new Test(); } catch (e) {}
    var test1 = v17;
    for (const v19 in test1) {
    }
    function f20() {
    }
    const t19 = Test?.prototype;
    t19.myAdditionalMethod = f20;
    let v22;
    try { v22 = new Test(); } catch (e) {}
    var test2 = v22;
    var j = k;
    var foundNewPrototypeProperty = false;
    for (const v28 in test2) {
        if ("myAdditionalMethod" == v28) {
            foundNewPrototypeProperty = true;
        }
    }
    function f32() {
    }
    var Test = f32;
    for (let i35 = 0; i35 < methodCount; i35++) {
        function f40() {
        }
        const t37 = Test?.prototype;
        t37["myMethod" + i35] = f40;
    }
    let v44;
    try { v44 = new Test(); } catch (e) {}
    var test1 = v44;
    for (const v46 in test1) {
    }
    const t45 = Test?.prototype;
    delete t45?.[k];
    let v49;
    try { v49 = new Test(); } catch (e) {}
    var test2 = v49;
    var j = k;
    var foundRemovedPrototypeProperty = false;
    for (const v54 in test2) {
        if (j == v54) {
            foundRemovedPrototypeProperty = true;
        }
    }
    function f57() {
    }
    var Test = f57;
    for (let i60 = 0; i60 < methodCount; i60++) {
        function f65() {
        }
        const t63 = Test?.prototype;
        t63["myMethod" + i60] = f65;
    }
    function update(a70) {
        a70.newProperty = true;
    }
    let v72;
    try { v72 = new Test(); } catch (e) {}
    var test1 = v72;
    try { update(test1); } catch (e) {}
    let v75;
    try { v75 = new Test(); } catch (e) {}
    var test2 = v75;
    try { update(test2); } catch (e) {}
    let v78;
    try { v78 = new Test(); } catch (e) {}
    var test3 = v78;
    try { update(test3); } catch (e) {}
    var calledNewPrototypeSetter = false;
    function f84() {
        calledNewPrototypeSetter = true;
    }
    const v86 = Test?.prototype;
    try { v86.__defineSetter__("newProperty", f84); } catch (e) {}
    let v88;
    try { v88 = new Test(); } catch (e) {}
    var test4 = v88;
    try { update(test4); } catch (e) {}
    const v92 = { prop: "on prototype" };
    var test4 = { __proto__: v92 };
    for (let i96 = 0; i96 < 200; i96++) {
        test4[i96] = [i96];
    }
    const v104 = { prop: "on prototype's prototype" };
    const v105 = { __proto__: v104 };
    var test5 = { __proto__: v105 };
    for (let i109 = 0; i109 < 200; i109++) {
        test5[i109] = [i109];
    }
    function f116(a117) {
        return a117?.prop;
    }
    getTestProperty = f116;
    try { getTestProperty(test4); } catch (e) {}
    try { getTestProperty(test4); } catch (e) {}
    try { getTestProperty(test4); } catch (e) {}
    test4.prop = "on self";
    try { getTestProperty(test4); } catch (e) {}
    function f126(a127) {
        return a127?.prop;
    }
    getTestProperty = f126;
    try { getTestProperty(test5); } catch (e) {}
    try { getTestProperty(test5); } catch (e) {}
    try { getTestProperty(test5); } catch (e) {}
    test5.prop = "on self";
    try { getTestProperty(test5); } catch (e) {}
} catch(e134) {
}
