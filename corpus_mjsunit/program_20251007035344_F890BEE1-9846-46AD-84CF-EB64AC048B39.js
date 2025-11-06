function logNaN(a1) {
    let v3;
    try { v3 = Math.log(a1); } catch (e) {}
    return v3;
}
try { noInline(logNaN); } catch (e) {}
function testLogNaN() {
    for (let i8 = 0; i8 < 10000; ++i8) {
        let v15;
        try { v15 = logNaN(NaN); } catch (e) {}
        var result = v15;
        let v18;
        try { v18 = isNaN(result); } catch (e) {}
        if (!v18) {
            throw ("logNaN(NaN) = " + result) + ", expected NaN";
        }
    }
}
try { testLogNaN(); } catch (e) {}
function logZero(a26) {
    let v28;
    try { v28 = Math.log(a26); } catch (e) {}
    return v28;
}
try { noInline(logZero); } catch (e) {}
function testLogZero() {
    for (let i32 = 0; i32 < 10000; ++i32) {
        let v39;
        try { v39 = logZero(0); } catch (e) {}
        var result = v39;
        if (result !== -Infinity) {
            throw ("logZero(0) = " + result) + ", expected -Infinity";
        }
    }
}
try { testLogZero(); } catch (e) {}
function logOne(a50) {
    let v52;
    try { v52 = Math.log(a50); } catch (e) {}
    return v52;
}
try { noInline(logOne); } catch (e) {}
function testLogOne() {
    for (let i56 = 0; i56 < 10000; ++i56) {
        let v63;
        try { v63 = logOne(1); } catch (e) {}
        var result = v63;
        if (result !== 0) {
            throw ("logOne(1) = " + result) + ", expected 0";
        }
    }
}
try { testLogOne(); } catch (e) {}
function logMinusOne(a73) {
    let v75;
    try { v75 = Math.log(a73); } catch (e) {}
    return v75;
}
try { noInline(logMinusOne); } catch (e) {}
function testLogMinusOne() {
    for (let i79 = 0; i79 < 10000; ++i79) {
        const v86 = -1;
        let v87;
        try { v87 = logMinusOne(v86); } catch (e) {}
        var result = v87;
        let v90;
        try { v90 = isNaN(result); } catch (e) {}
        if (!v90) {
            throw ("logMinusOne(-1) = " + result) + ", expected NaN";
        }
    }
}
try { testLogMinusOne(); } catch (e) {}
function logInfinity(a98) {
    let v100;
    try { v100 = Math.log(a98); } catch (e) {}
    return v100;
}
try { noInline(logInfinity); } catch (e) {}
function testLogInfinity() {
    for (let i104 = 0; i104 < 10000; ++i104) {
        let v111;
        try { v111 = logInfinity(Infinity); } catch (e) {}
        var result = v111;
        if (result !== Infinity) {
            throw ("logInfinity(Infinity) = " + result) + ", expected Infinity";
        }
    }
}
try { testLogInfinity(); } catch (e) {}
function logMinusInfinity(a120) {
    let v122;
    try { v122 = Math.log(a120); } catch (e) {}
    return v122;
}
try { noInline(logMinusInfinity); } catch (e) {}
function testLogMinusInfinity() {
    for (let i126 = 0; i126 < 10000; ++i126) {
        const v133 = -Infinity;
        let v134;
        try { v134 = logMinusInfinity(v133); } catch (e) {}
        var result = v134;
        let v137;
        try { v137 = isNaN(result); } catch (e) {}
        if (!v137) {
            throw ("logMinusInfinity(-Infinity) = " + result) + ", expected NaN";
        }
    }
}
try { testLogMinusInfinity(); } catch (e) {}
function logInteger(a145) {
    let v147;
    try { v147 = Math.log(a145); } catch (e) {}
    return v147;
}
try { noInline(logInteger); } catch (e) {}
function testLogInteger() {
    for (let i151 = 0; i151 < 10000; ++i151) {
        let v158;
        try { v158 = logInteger(42); } catch (e) {}
        var result = v158;
        if (result !== 3.7376696182833684) {
            throw ("logInteger(42) = " + result) + ", expected 3.7376696182833684";
        }
    }
}
try { testLogInteger(); } catch (e) {}
function logDouble(a168) {
    let v170;
    try { v170 = Math.log(a168); } catch (e) {}
    return v170;
}
try { noInline(logDouble); } catch (e) {}
function testLogDouble() {
    for (let i174 = 0; i174 < 10000; ++i174) {
        const v181 = Math?.PI;
        let v182;
        try { v182 = logDouble(v181); } catch (e) {}
        var result = v182;
        if (result !== 1.1447298858494002) {
            throw ("logDouble(Math.PI) = " + result) + ", expected 1.1447298858494002";
        }
    }
}
try { testLogDouble(); } catch (e) {}
