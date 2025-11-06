try {
    function f0() {
    }
    try { Math.trunc(NaN); } catch (e) {}
    const v5 = -0;
    try { Math.trunc(v5); } catch (e) {}
    -0;
    const v10 = +0;
    try { Math.trunc(v10); } catch (e) {}
    +0;
    try { Math.trunc(Infinity); } catch (e) {}
    const v16 = -Infinity;
    try { Math.trunc(v16); } catch (e) {}
    -Infinity;
    var MAX_NONINTEGER_VALUE = 4503599627370495.5;
    var TRUNC_MAX_NONINTEGER_VALUE = 4503599627370495;
    const v24 = Number?.MIN_VALUE;
    try { Math.trunc(v24); } catch (e) {}
    +0;
    try { Math.trunc(ONE_MINUS_EPSILON); } catch (e) {}
    +0;
    try { Math.trunc(ONE_PLUS_EPSILON); } catch (e) {}
    try { Math.trunc(MAX_NONINTEGER_VALUE); } catch (e) {}
    const v36 = Number?.MAX_VALUE;
    try { Math.trunc(v36); } catch (e) {}
    Number?.MAX_VALUE;
    const v40 = -Number?.MIN_VALUE;
    try { Math.trunc(v40); } catch (e) {}
    -0;
    const v44 = -ONE_MINUS_EPSILON;
    try { Math.trunc(v44); } catch (e) {}
    -0;
    const v48 = -ONE_PLUS_EPSILON;
    try { Math.trunc(v48); } catch (e) {}
    -1;
    const v52 = -MAX_NONINTEGER_VALUE;
    try { Math.trunc(v52); } catch (e) {}
    -TRUNC_MAX_NONINTEGER_VALUE;
    const v56 = -Number?.MAX_VALUE;
    try { Math.trunc(v56); } catch (e) {}
    -Number?.MAX_VALUE;
    for (let i62 = 1, i63 = 1.1; i62 < 20; i62++, i63 += 1) {
        try { Math.trunc(i63); } catch (e) {}
    }
    for (let i77 = -1, i78 = -1.1; i77 > -20; i77--, i78 -= 1) {
        try { Math.trunc(i78); } catch (e) {}
    }
    const v91 = 1e+40 + 0.5;
    try { Math.trunc(v91); } catch (e) {}
    try { Math.trunc(1e+300); } catch (e) {}
    const v98 = -1e+300;
    try { Math.trunc(v98); } catch (e) {}
    -1e+300;
    try { Math.trunc(1e-300); } catch (e) {}
    const v106 = -1e-300;
    try { Math.trunc(v106); } catch (e) {}
    -0;
    const v111 = +0.9999;
    try { Math.trunc(v111); } catch (e) {}
    +0;
    const v116 = -0.9999;
    try { Math.trunc(v116); } catch (e) {}
    -0;
    try { f0(0, 0, "ok"); } catch (e) {}
} catch(e124) {
}
