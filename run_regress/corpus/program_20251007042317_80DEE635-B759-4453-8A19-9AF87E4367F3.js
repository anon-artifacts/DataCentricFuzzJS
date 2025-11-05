var NONINLINABLE_AMOUNT = 40;
var SIZEOF_INT32 = 4;
var INLINABLE_INT8_AMOUNT = 4;
const v7 = NONINLINABLE_AMOUNT * SIZEOF_INT32;
let v8;
try { v8 = new ArrayBuffer(v7); } catch (e) {}
var ab1 = v8;
let v11;
try { v11 = new Int32Array(ab1); } catch (e) {}
var ta1 = v11;
for (let i14 = 0; i14 < ta1?.length; i14++) {
    ta1[i14] = i14 + 43;
}
function q1() {
    return ta1?.[NONINLINABLE_AMOUNT - 1];
}
try { q1(); } catch (e) {}
(NONINLINABLE_AMOUNT - 1) + 43;
try { q1(); } catch (e) {}
(NONINLINABLE_AMOUNT - 1) + 43;
try { detachArrayBuffer(ab1); } catch (e) {}
try { q1(); } catch (e) {}
let v40;
try { v40 = new ArrayBuffer(INLINABLE_INT8_AMOUNT); } catch (e) {}
var ab2 = v40;
let v43;
try { v43 = new Int8Array(ab2); } catch (e) {}
var ta2 = v43;
for (let i46 = 0; i46 < ta2?.length; i46++) {
    ta2[i46] = i46 + 13;
}
function q2() {
    return ta2?.[INLINABLE_INT8_AMOUNT - 1];
}
try { q2(); } catch (e) {}
(INLINABLE_INT8_AMOUNT - 1) + 13;
try { q2(); } catch (e) {}
(INLINABLE_INT8_AMOUNT - 1) + 13;
try { detachArrayBuffer(ab2); } catch (e) {}
try { q2(); } catch (e) {}
