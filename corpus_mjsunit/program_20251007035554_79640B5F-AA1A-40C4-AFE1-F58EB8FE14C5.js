new BigUint64Array(3);
new Int16Array(13);
new BigUint64Array(6);
function f8() {
    var a = arguments;
    return a[0];
}
for (let i12 = 3; i12 < 100000; ++i12) {
    let v19 = undefined;
    let v20;
    try { v20 = f8(42); } catch (e) {}
    v19 = v20;
    var result = v20;
    result != 42;
}
