console.log("Tests the code path in typedArray.set that may have to do a copy via an intermediate buffer because the source and destination overlap and have different size elements (source is smaller than destination).");
function foo_reference(a4) {
    const v8 = new Int32Array(a4 + 1);
    var array = v8;
    for (let i11 = 0; i11 < a4; ++i11) {
        array[i11] = 42 + i11;
    }
    const v18 = new Int32Array(array);
    var array2 = v18;
    const v23 = new Uint8Array(array.buffer, 0, a4);
    array2.set(v23, 1);
    return array2;
}
function foo(a27) {
    const v31 = new Int32Array(a27 + 1);
    var array = v31;
    for (let i34 = 0; i34 < a27; ++i34) {
        array[i34] = 42 + i34;
    }
    const v44 = new Uint8Array(array.buffer, 0, a27);
    array.set(v44, 1);
    return array;
}
function bar_reference(a48) {
    const v52 = new Int32Array(a48 + 1);
    var array = v52;
    for (let i55 = 0; i55 < a48; ++i55) {
        const v61 = 42 + i55;
        array[i55 + 1] = v61;
    }
    const v64 = new Int32Array(array);
    var array2 = v64;
    const v73 = new Uint8Array(array.buffer, ((a48 + 1) * 4) - a48);
    array2.set(v73, 0);
    return array2;
}
function bar(a77) {
    const v81 = new Int32Array(a77 + 1);
    var array = v81;
    for (let i84 = 0; i84 < a77; ++i84) {
        const v90 = 42 + i84;
        array[i84 + 1] = v90;
    }
    const v100 = new Uint8Array(array.buffer, ((a77 + 1) * 4) - a77);
    array.set(v100, 0);
    return array;
}
function baz_reference(a104) {
    const v106 = new Int32Array(a104);
    var array = v106;
    for (let i109 = 0; i109 < a104; ++i109) {
        array[i109] = 42 + i109;
    }
    const v116 = new Int32Array(array);
    var array2 = v116;
    const v121 = new Uint8Array(array.buffer, 0, a104);
    array2.set(v121);
    return array2;
}
function baz(a124) {
    const v126 = new Int32Array(a124);
    var array = v126;
    for (let i129 = 0; i129 < a124; ++i129) {
        array[i129] = 42 + i129;
    }
    const v139 = new Uint8Array(array.buffer, 0, a124);
    array.set(v139);
    return array;
}
function fuz_reference(a142) {
    const v144 = new Int32Array(a142);
    var array = v144;
    for (let i147 = 0; i147 < a142; ++i147) {
        array[i147] = 42 + i147;
    }
    const v154 = new Int32Array(array);
    var array2 = v154;
    const v161 = new Uint8Array(array.buffer, (a142 * 4) - a142);
    array2.set(v161);
    return array2;
}
function fuz(a164) {
    const v166 = new Int32Array(a164);
    var array = v166;
    for (let i169 = 0; i169 < a164; ++i169) {
        array[i169] = 42 + i169;
    }
    const v181 = new Uint8Array(array.buffer, (a164 * 4) - a164);
    array.set(v181);
    return array;
}
function thingy_reference(a184) {
    const v186 = new Int32Array(a184);
    var array = v186;
    for (let i189 = 0; i189 < a184; ++i189) {
        array[i189] = 42 + i189;
    }
    const v196 = new Int32Array(array);
    var array2 = v196;
    const v201 = new Uint8Array(array.buffer, 4, a184);
    array2.set(v201);
    return array2;
}
function thingy(a204) {
    const v206 = new Int32Array(a204);
    var array = v206;
    for (let i209 = 0; i209 < a204; ++i209) {
        array[i209] = 42 + i209;
    }
    const v219 = new Uint8Array(array.buffer, 4, a204);
    array.set(v219);
    return array;
}
foo(10);
bar(10);
baz(10);
fuz(10);
thingy(10);
