try {
    function f0() {
    }
    try { Math.log1p(NaN); } catch (e) {}
    const v7 = -1 - 1e-10;
    try { Math.log1p(v7); } catch (e) {}
    const v12 = -1 - 1e-05;
    try { Math.log1p(v12); } catch (e) {}
    const v17 = -1 - 0.1;
    try { Math.log1p(v17); } catch (e) {}
    const v20 = -ONE_PLUS_EPSILON;
    try { Math.log1p(v20); } catch (e) {}
    for (let i24 = -2; i24 > -20; i24--) {
        try { Math.log1p(i24); } catch (e) {}
    }
    const v33 = -1;
    try { Math.log1p(v33); } catch (e) {}
    -Infinity;
    const v38 = +0;
    try { Math.log1p(v38); } catch (e) {}
    +0;
    const v43 = -0;
    try { Math.log1p(v43); } catch (e) {}
    -0;
    try { Math.log1p(Infinity); } catch (e) {}
    try { f0(0, 0, "ok"); } catch (e) {}
} catch(e52) {
}
