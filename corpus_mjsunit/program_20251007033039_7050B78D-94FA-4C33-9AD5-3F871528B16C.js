try {
    function f0() {
    }
    var BUGNUMBER = 1187233;
    var summary = "Passing a Date object to |new Date()| should copy it, not convert it to " + "a primitive and create it from that.";
    const v9 = (BUGNUMBER + ": ") + summary;
    try { f0(v9); } catch (e) {}
    const t7 = Date?.prototype;
    t7.valueOf = null;
    const t9 = Date?.prototype;
    t9.toString = null;
    let v16;
    try { v16 = new Date(8675309); } catch (e) {}
    let v17;
    try { v17 = new Date(v16); } catch (e) {}
    var d = v17;
    try { d.getTime(); } catch (e) {}
    const v21 = () => {
        return 42;
    };
    const t20 = Date?.prototype;
    t20.valueOf = v21;
    let v25;
    try { v25 = new Date(8675309); } catch (e) {}
    let v26;
    try { v26 = new Date(v25); } catch (e) {}
    d = v26;
    try { d.getTime(); } catch (e) {}
    let v30;
    try { v30 = newGlobal(); } catch (e) {}
    var D = v30?.Date;
    const t31 = D?.prototype;
    t31.valueOf = null;
    const t33 = D?.prototype;
    t33.toString = null;
    let v37;
    try { v37 = new D(3141592654); } catch (e) {}
    let v38;
    try { v38 = new Date(v37); } catch (e) {}
    var d = v38;
    try { d.getTime(); } catch (e) {}
    const v42 = () => {
        return 525600;
    };
    const t44 = D?.prototype;
    t44.valueOf = v42;
    let v46;
    try { v46 = new D(3141592654); } catch (e) {}
    let v47;
    try { v47 = new Date(v46); } catch (e) {}
    d = v47;
    try { d.getTime(); } catch (e) {}
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
    try { f0("Tests complete"); } catch (e) {}
} catch(e58) {
}
