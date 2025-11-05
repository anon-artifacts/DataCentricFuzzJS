function f0() {
}
const EMPTY = 0;
const INLINE_STORAGE = 10;
const NON_INLINE_STORAGE = 1024;
{
    let v8;
    try { v8 = new Int32Array(EMPTY); } catch (e) {}
    let ta = v8;
    try { Object.seal(ta); } catch (e) {}
    try { Object.isExtensible(ta); } catch (e) {}
    try { Object.isSealed(ta); } catch (e) {}
    try { Object.isFrozen(ta); } catch (e) {}
}
for (const v19 of [INLINE_STORAGE,NON_INLINE_STORAGE]) {
    let v21;
    try { v21 = new Int32Array(v19); } catch (e) {}
    let ta = v21;
    try { Object.seal(ta); } catch (e) {}
    try { Object.isExtensible(ta); } catch (e) {}
    try { Object.isSealed(ta); } catch (e) {}
    try { Object.isFrozen(ta); } catch (e) {}
}
{
    let v32;
    try { v32 = new Int32Array(EMPTY); } catch (e) {}
    let ta = v32;
    try { Object.freeze(ta); } catch (e) {}
    try { Object.isExtensible(ta); } catch (e) {}
    try { Object.isSealed(ta); } catch (e) {}
    try { Object.isFrozen(ta); } catch (e) {}
}
for (const v43 of [INLINE_STORAGE,NON_INLINE_STORAGE]) {
    let v45;
    try { v45 = new Int32Array(v43); } catch (e) {}
    let ta = v45;
    const v47 = () => {
        let v49;
        try { v49 = Object.freeze(ta); } catch (e) {}
        return v49;
    };
    try { v47(); } catch (e) {}
    try { Object.isExtensible(ta); } catch (e) {}
    try { Object.isSealed(ta); } catch (e) {}
    try { Object.isFrozen(ta); } catch (e) {}
}
{
    let v60;
    try { v60 = new Int32Array(EMPTY); } catch (e) {}
    let ta = v60;
    try { Object.preventExtensions(ta); } catch (e) {}
    try { Object.isExtensible(ta); } catch (e) {}
    try { Object.isSealed(ta); } catch (e) {}
    try { Object.isFrozen(ta); } catch (e) {}
}
for (const v71 of [INLINE_STORAGE,NON_INLINE_STORAGE]) {
    let v73;
    try { v73 = new Int32Array(v71); } catch (e) {}
    let ta = v73;
    try { Object.preventExtensions(ta); } catch (e) {}
    try { Object.isExtensible(ta); } catch (e) {}
    try { Object.isSealed(ta); } catch (e) {}
    try { Object.isFrozen(ta); } catch (e) {}
}
if (typeof f0 === "function") {
    try { f0(true, true); } catch (e) {}
}
