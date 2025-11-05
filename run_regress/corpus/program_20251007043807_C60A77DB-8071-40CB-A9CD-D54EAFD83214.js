const limit = 65535 + 1;
function f4() {
    function foo() {
        try {
            new Int8Array(limit);
        } catch(e8) {
            return e8.stack;
        }
    }
    const v10 = foo();
    /new Int8Array/.test(v10);
    const v13 = foo();
    /new Int8Array/.test(v13);
    const v16 = foo();
    /new Int8Array/.test(v16);
}
f4();
function f20() {
    function foo() {
        try {
            new Uint8Array(limit);
        } catch(e24) {
            return e24.stack;
        }
    }
    const v26 = foo();
    /new Uint8Array/.test(v26);
    const v29 = foo();
    /new Uint8Array/.test(v29);
    const v32 = foo();
    /new Uint8Array/.test(v32);
}
f20();
function f36() {
    function foo() {
        try {
            new Uint8ClampedArray(limit);
        } catch(e40) {
            return e40.stack;
        }
    }
    const v42 = foo();
    /new Uint8ClampedArray/.test(v42);
    const v45 = foo();
    /new Uint8ClampedArray/.test(v45);
    const v48 = foo();
    /new Uint8ClampedArray/.test(v48);
}
f36();
function f52() {
    function foo() {
        try {
            new Int16Array(limit);
        } catch(e56) {
            return e56.stack;
        }
    }
    const v58 = foo();
    /new Int16Array/.test(v58);
    const v61 = foo();
    /new Int16Array/.test(v61);
    const v64 = foo();
    /new Int16Array/.test(v64);
}
f52();
function f68() {
    function foo() {
        try {
            new Uint16Array(limit);
        } catch(e72) {
            return e72.stack;
        }
    }
    const v74 = foo();
    /new Uint16Array/.test(v74);
    const v77 = foo();
    /new Uint16Array/.test(v77);
    const v80 = foo();
    /new Uint16Array/.test(v80);
}
f68();
function f84() {
    function foo() {
        try {
            new Int32Array(limit);
        } catch(e88) {
            return e88.stack;
        }
    }
    const v90 = foo();
    /new Int32Array/.test(v90);
    const v93 = foo();
    /new Int32Array/.test(v93);
    const v96 = foo();
    /new Int32Array/.test(v96);
}
f84();
function f100() {
    function foo() {
        try {
            new Uint32Array(limit);
        } catch(e104) {
            return e104.stack;
        }
    }
    const v106 = foo();
    /new Uint32Array/.test(v106);
    const v109 = foo();
    /new Uint32Array/.test(v109);
    const v112 = foo();
    /new Uint32Array/.test(v112);
}
f100();
function f116() {
    function foo() {
        try {
            new Float32Array(limit);
        } catch(e120) {
            return e120.stack;
        }
    }
    const v122 = foo();
    /new Float32Array/.test(v122);
    const v125 = foo();
    /new Float32Array/.test(v125);
    const v128 = foo();
    /new Float32Array/.test(v128);
}
f116();
function f132() {
    function foo() {
        try {
            new Float64Array(limit);
        } catch(e136) {
            return e136.stack;
        }
    }
    const v138 = foo();
    /new Float64Array/.test(v138);
    const v141 = foo();
    /new Float64Array/.test(v141);
    const v144 = foo();
    /new Float64Array/.test(v144);
}
f132();
function f148() {
    function foo() {
        try {
            new BigInt64Array(limit);
        } catch(e152) {
            return e152.stack;
        }
    }
    const v154 = foo();
    /new BigInt64Array/.test(v154);
    const v157 = foo();
    /new BigInt64Array/.test(v157);
    const v160 = foo();
    /new BigInt64Array/.test(v160);
}
f148();
function f164() {
    function foo() {
        try {
            new BigUint64Array(limit);
        } catch(e168) {
            return e168.stack;
        }
    }
    const v170 = foo();
    /new BigUint64Array/.test(v170);
    const v173 = foo();
    /new BigUint64Array/.test(v173);
    const v176 = foo();
    /new BigUint64Array/.test(v176);
}
f164();
