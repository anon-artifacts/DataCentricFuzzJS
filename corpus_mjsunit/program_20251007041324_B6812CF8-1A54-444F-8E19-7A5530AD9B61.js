function shouldBe(a1, a2) {
}
function shouldThrow(a4, a5) {
    var errorThrown = false;
    var error = null;
    try {
        try { a4(); } catch (e) {}
    } catch(e11) {
        errorThrown = true;
        error = e11;
    }
}
function toString(a14) {
    return `${a14}`;
}
try { noInline(toString); } catch (e) {}
for (let i19 = 0; i19 < 10000; ++i19) {
    let v25;
    try { v25 = toString(i19); } catch (e) {}
    const v27 = i19 + "";
    try { shouldBe(v25, v27); } catch (e) {}
    let v30;
    try { v30 = toString(null); } catch (e) {}
    try { shouldBe(v30, "null"); } catch (e) {}
    let v34;
    try { v34 = toString(undefined); } catch (e) {}
    try { shouldBe(v34, "undefined"); } catch (e) {}
    let v38;
    try { v38 = toString(10.5); } catch (e) {}
    try { shouldBe(v38, "10.5"); } catch (e) {}
    const v42 = -10.5;
    let v43;
    try { v43 = toString(v42); } catch (e) {}
    try { shouldBe(v43, "-10.5"); } catch (e) {}
    let v47;
    try { v47 = toString(true); } catch (e) {}
    try { shouldBe(v47, "true"); } catch (e) {}
    let v51;
    try { v51 = toString(false); } catch (e) {}
    try { shouldBe(v51, "false"); } catch (e) {}
    const v56 = 0 / 0;
    let v57;
    try { v57 = toString(v56); } catch (e) {}
    try { shouldBe(v57, "NaN"); } catch (e) {}
}
let v61;
try { v61 = toString("HELLO"); } catch (e) {}
try { shouldBe(v61, "HELLO"); } catch (e) {}
const v64 = () => {
    let v67;
    try { v67 = Symbol("Cocoa"); } catch (e) {}
    try { toString(v67); } catch (e) {}
};
const v69 = `TypeError: Cannot convert a symbol to a string`;
try { shouldThrow(v64, v69); } catch (e) {}
