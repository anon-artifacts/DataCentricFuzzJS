function f1() {
    const v3 = new Int32Array(50);
    var a = v3;
    for (let i6 = 0; i6 < 100; i6++) {
        var x = a[i6];
        typeof x;
        i6 < a.length ? "number" : "undefined";
    }
    const v22 = new Float32Array(50);
    var b = v22;
    for (let i25 = 0; i25 < 100; i25++) {
        var x = b[i25];
        typeof x;
        i25 < b.length ? "number" : "undefined";
    }
}
f1();
function f2() {
    const t18 = Object.prototype;
    t18[50] = 4.4;
    const t20 = Object.prototype;
    t20[55] = Math;
    const v48 = new Int16Array(50);
    var a = v48;
    for (let i51 = 0; i51 < 100; i51++) {
        var x = a[i51];
        if (i51 < a.length) {
        } else {
        }
    }
}
f2();
