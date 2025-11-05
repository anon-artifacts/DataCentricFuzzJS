console.log("Tests the code path of typedArray.set that bottoms out in memmove.");
function foo(a4) {
    const v8 = new Int32Array(a4 + 1);
    var array = v8;
    for (let i11 = 0; i11 < a4; ++i11) {
        array[i11] = 42 + i11;
    }
    array.set(array.subarray(0, a4), 1);
    return array;
}
function bar(a23) {
    const v27 = new Int32Array(a23 + 1);
    var array = v27;
    for (let i30 = 0; i30 < a23; ++i30) {
        const v36 = 42 + i30;
        array[i30 + 1] = v36;
    }
    array.set(array.subarray(1, a23 + 1), 0);
    return array;
}
function arraysEqual(a46, a47) {
    if (a46.length != a47.length) {
        return false;
    }
}
foo(10);
bar(10);
