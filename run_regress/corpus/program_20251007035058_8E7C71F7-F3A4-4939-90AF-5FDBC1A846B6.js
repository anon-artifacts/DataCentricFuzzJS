new Int32Array(2);
var Failed = 0;
function f7(a8, a9) {
    if (((a8 | 0) >>> 0) > (a9 >>> 0)) {
        return true;
    }
}
function f18() {
    return 1;
}
function f20(a21, a22) {
    if ((a21 >>> 0) > (a22() | 0)) {
    }
}
for (let v31 = 0; v31 < 500; v31++) {
    if (f7(-1, 1)) {
    }
    if (f20(1, f18)) {
    }
}
if (f7) {
}
if (f20) {
}
if (!(Failed == 0)) {
}
