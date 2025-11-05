const v0 = () => {
    const v1 = /bar\u0178\d/i;
    try { ("foobarÿ5bazሀ").search(v1); } catch (e) {}
    return 3;
};
const v6 = { keepFailing: true };
try { oomTest(v0, v6); } catch (e) {}
const v9 = () => {
    const v10 = /(?!(?!(?!6)[\Wc]))/i;
    try { v10.test(); } catch (e) {}
    return false;
};
const v14 = { keepFailing: true };
try { oomTest(v9, v14); } catch (e) {}
const v16 = () => {
    const v18 = /bar\u0178\d/i;
    let v19;
    try { v19 = v18.exec("foobarÿ5bazሀ"); } catch (e) {}
    v19 != null;
    return true;
};
const v24 = { keepFailing: true };
try { oomTest(v16, v24); } catch (e) {}
