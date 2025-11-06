console.log("Tests the code path in typedArray.set that may have to do a copy via an intermediate buffer because the source and destination overlap and have different size elements (source is larger than destination).");
function foo_reference(a4) {
    const v6 = new Int8Array(a4);
    var array = v6;
    for (let i9 = 0; i9 < a4; ++i9) {
        array[i9] = 42 + i9;
    }
    const v16 = new Int8Array(array);
    var array2 = v16;
    const v20 = new Int32Array(array.buffer);
    array2.set(v20);
    return array2;
}
function foo(a23) {
    const v25 = new Int8Array(a23);
    var array = v25;
    for (let i28 = 0; i28 < a23; ++i28) {
        array[i28] = 42 + i28;
    }
    const v37 = new Int32Array(array.buffer);
    array.set(v37);
    return array;
}
function bar_reference(a40) {
    const v42 = new Int8Array(a40);
    var array = v42;
    for (let i45 = 0; i45 < a40; ++i45) {
        array[i45] = 42 + i45;
    }
    const v52 = new Int8Array(array);
    var array2 = v52;
    const v56 = new Int32Array(array.buffer);
    array2.set(v56, a40 - (a40 / 4));
    return array2;
}
function bar(a62) {
    const v64 = new Int8Array(a62);
    var array = v64;
    for (let i67 = 0; i67 < a62; ++i67) {
        array[i67] = 42 + i67;
    }
    const v76 = new Int32Array(array.buffer);
    array.set(v76, a62 - (a62 / 4));
    return array;
}
function baz_reference(a82) {
    const v84 = new Int8Array(a82);
    var array = v84;
    for (let i87 = 0; i87 < a82; ++i87) {
        array[i87] = 42 + i87;
    }
    const v94 = new Int8Array(array);
    var array2 = v94;
    const v98 = new Int32Array(array.buffer);
    array2.set(v98, (a82 / 2) - ((a82 / 4) / 2));
    return array2;
}
function baz(a108) {
    const v110 = new Int8Array(a108);
    var array = v110;
    for (let i113 = 0; i113 < a108; ++i113) {
        array[i113] = 42 + i113;
    }
    const v122 = new Int32Array(array.buffer);
    array.set(v122, (a108 / 2) - ((a108 / 4) / 2));
    return array;
}
foo(64);
bar(64);
baz(64);
