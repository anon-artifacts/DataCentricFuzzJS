function foo_reference(a1) {
    const v5 = new Int32Array(a1 + 1);
    var array = v5;
    for (let i8 = 0; i8 < a1; ++i8) {
        array[i8] = i8;
    }
    const v13 = new Int32Array(array);
    var array2 = v13;
    const v18 = new Uint8Array(array.buffer, 0, a1);
    array2.set(v18, 1);
    return array2;
}
function foo(a22) {
    const v26 = new Int32Array(a22 + 1);
    var array = v26;
    for (let i29 = 0; i29 < a22; ++i29) {
        array[i29] = i29;
    }
    const v37 = new Uint8Array(array.buffer, 0, a22);
    array.set(v37, 1);
    return array;
}
function bar_reference(a41) {
    const v45 = new Int32Array(a41 + 1);
    var array = v45;
    for (let i48 = 0; i48 < a41; ++i48) {
        array[i48] = i48;
    }
    const v53 = new Int32Array(array);
    var array2 = v53;
    const v58 = new Uint8Array(array.buffer, 34);
    array2.set(v58, 0);
    return array2;
}
function bar(a62) {
    const v66 = new Int32Array(a62 + 1);
    var array = v66;
    for (let i69 = 0; i69 < a62; ++i69) {
        array[i69] = i69;
    }
    const v77 = new Uint8Array(array.buffer, 34);
    array.set(v77, 0);
    return array;
}
foo(10);
foo_reference(10);
bar(10);
bar_reference(10);
