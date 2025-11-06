function f() {
    const v3 = new Uint8Array(30);
    var x = v3;
    for (let i6 = 0; i6 < x.length; i6++) {
        x[i6] = i6;
    }
    var res = 0;
    for (let i15 = 0; i15 < x.length; i15++) {
        res += x[i15];
    }
}
f();
function g() {
    const v27 = new Int8Array(30);
    var x = v27;
    for (let i30 = 1; i30 < x.length; i30++) {
        x[i30 - 1] = i30;
    }
    var res = 0;
    for (let i41 = 0; i41 < x.length; i41++) {
        res += x[i41];
    }
}
g();
