new Int16Array();
test();
function test(a5, a6) {
    0 > ((a6 | 0) >>> 0);
}
function f13(a14, a15) {
    if (!((a14 >>> 0) > 0)) {
        return false;
    }
}
for (let v21 = 0; v21 < 50; v21++) {
    test();
    f13(-1);
}
if (f13) {
}
