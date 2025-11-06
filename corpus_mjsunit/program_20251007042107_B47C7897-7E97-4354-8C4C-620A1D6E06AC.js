let v1;
try { v1 = Symbol(); } catch (e) {}
var symbol1 = v1;
const v4 = { [symbol1]: 42 };
let v6;
try { v6 = Object.getOwnPropertySymbols(v4); } catch (e) {}
var symbol2 = v6?.[0];
function shouldBe(a10, a11) {
    if (a10 !== a11) {
        const v15 = "bad value: " + a10;
        let v16;
        try { v16 = new Error(v15); } catch (e) {}
        throw v16;
    }
}
function getByVal(a18, a19) {
    return a18?.[a19];
}
try { noInline(getByVal); } catch (e) {}
function getSym1() {
    return symbol1;
}
try { noInline(getSym1); } catch (e) {}
function getSym2() {
    return symbol2;
}
try { noInline(getSym2); } catch (e) {}
var object = { [symbol1]: 42, hello: 50 };
for (let i32 = 0; i32 < 100; ++i32) {
    const v41 = (i32 % 2) === 0;
    let v42;
    try { v42 = getSym1(); } catch (e) {}
    let v43;
    try { v43 = getSym2(); } catch (e) {}
    const v44 = v41 ? v42 : v43;
    let v45;
    try { v45 = getByVal(object, v44); } catch (e) {}
    try { shouldBe(v45, 42); } catch (e) {}
}
let v49;
try { v49 = getByVal(object, "hello"); } catch (e) {}
try { shouldBe(v49, 50); } catch (e) {}
for (let i53 = 0; i53 < 10000; ++i53) {
    const v62 = (i53 % 2) === 0;
    let v63;
    try { v63 = getSym1(); } catch (e) {}
    let v64;
    try { v64 = getSym2(); } catch (e) {}
    const v65 = v62 ? v63 : v64;
    let v66;
    try { v66 = getByVal(object, v65); } catch (e) {}
    try { shouldBe(v66, 42); } catch (e) {}
}
let v70;
try { v70 = getByVal(object, "hello"); } catch (e) {}
try { shouldBe(v70, 50); } catch (e) {}
