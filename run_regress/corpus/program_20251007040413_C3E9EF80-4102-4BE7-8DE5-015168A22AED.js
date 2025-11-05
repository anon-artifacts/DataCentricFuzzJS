function f() {
    const v3 = new Int32Array(10);
    var arr = v3;
    function f5() {
        return arr.length;
    }
    x = f5;
    for (let i9 = 0; i9 < arr.length; i9++) {
        arr[i9] = i9;
    }
    arr[5];
}
f();
