function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v6 = "bad value: " + a1;
        let v7;
        try { v7 = new Error(v6); } catch (e) {}
        throw v7;
    }
}
function toInt32(a9) {
    return (a9 * 0.5) >> 0;
}
try { noInline(toInt32); } catch (e) {}
for (let i17 = 0; i17 < 100000; ++i17) {
    const v24 = i17 * 1;
    try { toInt32(v24); } catch (e) {}
}
function test(a27) {
    const v29 = a27 * 2;
    let v30;
    try { v30 = toInt32(v29); } catch (e) {}
    return v30;
}
const INT32_MAX = 2147483647;
const INT32_MIN = -2147483648;
const v37 = INT32_MAX - 1;
let v38;
try { v38 = test(v37); } catch (e) {}
const v40 = INT32_MAX - 1;
try { shouldBe(v38, v40); } catch (e) {}
const v43 = INT32_MAX - 0.5;
let v44;
try { v44 = test(v43); } catch (e) {}
const v46 = INT32_MAX - 1;
try { shouldBe(v44, v46); } catch (e) {}
let v48;
try { v48 = test(INT32_MAX); } catch (e) {}
try { shouldBe(v48, INT32_MAX); } catch (e) {}
const v51 = INT32_MAX + 0.5;
let v52;
try { v52 = test(v51); } catch (e) {}
try { shouldBe(v52, INT32_MAX); } catch (e) {}
const v55 = INT32_MAX + 1;
let v56;
try { v56 = test(v55); } catch (e) {}
try { shouldBe(v56, INT32_MIN); } catch (e) {}
const v59 = INT32_MIN - 1;
let v60;
try { v60 = test(v59); } catch (e) {}
try { shouldBe(v60, INT32_MAX); } catch (e) {}
const v63 = INT32_MIN - 0.5;
let v64;
try { v64 = test(v63); } catch (e) {}
try { shouldBe(v64, INT32_MIN); } catch (e) {}
let v66;
try { v66 = test(INT32_MIN); } catch (e) {}
try { shouldBe(v66, INT32_MIN); } catch (e) {}
const v69 = INT32_MIN + 0.5;
let v70;
try { v70 = test(v69); } catch (e) {}
const v72 = INT32_MIN + 1;
try { shouldBe(v70, v72); } catch (e) {}
const v75 = INT32_MIN + 1;
let v76;
try { v76 = test(v75); } catch (e) {}
const v78 = INT32_MIN + 1;
try { shouldBe(v76, v78); } catch (e) {}
const v81 = Number?.EPSILON;
let v82;
try { v82 = test(v81); } catch (e) {}
try { shouldBe(v82, 0); } catch (e) {}
const v85 = Number?.NaN;
let v86;
try { v86 = test(v85); } catch (e) {}
try { shouldBe(v86, 0); } catch (e) {}
const v89 = Number?.POSITIVE_INFINITY;
let v90;
try { v90 = test(v89); } catch (e) {}
try { shouldBe(v90, 0); } catch (e) {}
const v93 = Number?.NEGATIVE_INFINITY;
let v94;
try { v94 = test(v93); } catch (e) {}
try { shouldBe(v94, 0); } catch (e) {}
const v97 = Number?.MAX_SAFE_INTEGER;
let v98;
try { v98 = test(v97); } catch (e) {}
const v100 = -1;
try { shouldBe(v98, v100); } catch (e) {}
const v102 = Number?.MIN_SAFE_INTEGER;
let v103;
try { v103 = test(v102); } catch (e) {}
try { shouldBe(v103, 1); } catch (e) {}
