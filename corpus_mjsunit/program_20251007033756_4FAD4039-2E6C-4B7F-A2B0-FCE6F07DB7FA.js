function shouldThrow(a1, a2) {
    var errorThrown = false;
    var error = null;
    try {
        try { a1(); } catch (e) {}
    } catch(e8) {
        errorThrown = true;
        error = e8;
    }
}
function sloppyCountdown(a11) {
    function even(a13) {
        if (a13 == 0) {
            return a13;
        }
        const v17 = a13 - 1;
        let v19;
        try { v19 = odd(v17); } catch (e) {}
        return v19;
    }
    function odd(a21) {
        if (a21 == 1) {
            return a21;
        }
        const v25 = a21 - 1;
        let v26;
        try { v26 = even(v25); } catch (e) {}
        return v26;
    }
    if ((a11 % 2) === 0) {
        let v31;
        try { v31 = even(a11); } catch (e) {}
        return v31;
    } else {
        let v32;
        try { v32 = odd(a11); } catch (e) {}
        return v32;
    }
}
function strictCountdown(a34) {
    'use strict';
    function even(a36) {
        if (a36 == 0) {
            return a36;
        }
        const v40 = a36 - 1;
        let v42;
        try { v42 = odd(v40); } catch (e) {}
        return v42;
    }
    function odd(a44) {
        if (a44 == 1) {
            return a44;
        }
        const v48 = a44 - 1;
        let v49;
        try { v49 = even(v48); } catch (e) {}
        return v49;
    }
    if ((a34 % 2) === 0) {
        let v54;
        try { v54 = even(a34); } catch (e) {}
        return v54;
    } else {
        let v55;
        try { v55 = odd(a34); } catch (e) {}
        return v55;
    }
}
function f56() {
    try { sloppyCountdown(100000); } catch (e) {}
}
try { shouldThrow(f56, "RangeError: Maximum call stack size exceeded."); } catch (e) {}
try { strictCountdown(100000); } catch (e) {}
function odd(a64) {
    'use strict';
    if (a64 > 0) {
        let v69;
        try { v69 = even(a64, 0); } catch (e) {}
        return v69;
    }
}
function even(a71) {
    'use strict';
    const v73 = a71 - 1;
    let v74;
    try { v74 = odd(v73); } catch (e) {}
    return v74;
}
try { odd(100000); } catch (e) {}
