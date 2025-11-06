let v1;
try { v1 = newGlobal(); } catch (e) {}
var g = v1;
function* gen3() {
    yield 1;
    yield 2;
}
let v8;
try { v8 = gen3(); } catch (e) {}
it = v8;
try { g.eval("function *gen4() { yield 5; yield 6; }; var it4 = gen4();"); } catch (e) {}
const v12 = g?.it4;
const v14 = it?.next;
try { v14.call(v12); } catch (e) {}
const v18 = () => {
    const v19 = g?.it4;
    const v21 = it?.throw;
    let v22;
    try { v22 = v21.call(v19, 8); } catch (e) {}
    return v22;
};
try { v18(); } catch (e) {}
const v25 = g?.it4;
const v27 = it?.return;
try { v27.call(v25, 8); } catch (e) {}
try {
    const v31 = [];
    const v32 = it?.next;
    try { v32.call(v31); } catch (e) {}
} catch(e36) {
    let v38;
    try { v38 = e36.toString(); } catch (e) {}
    try { v38.includes("called on incompatible Array"); } catch (e) {}
}
