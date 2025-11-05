const v0 = [];
function f1(a2) {
    let v3 = false;
    let v4 = undefined;
    if (a2) {
        v4 = 42;
    }
    v4 * 2;
    v3 = v0 === v4;
}
var loopCount = 10000;
for (let i12 = 0; i12 < (loopCount - 1); i12++) {
    f1(i12);
}
