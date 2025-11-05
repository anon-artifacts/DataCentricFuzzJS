function check_in(a1, a2) {
    return a1 in a2;
}
function check_has_own(a5, a6) {
    return a6.hasOwnProperty(a5);
}
function warmup(a9) {
    for (let i11 = 0; i11 < 1001; i11++) {
        check_in(i11, a9);
        check_has_own(i11, a9);
    }
}
function check_assertions(a20) {
    check_in(1, a20);
    check_in("-0", a20);
    check_in(-10, a20);
    check_in(1012, a20);
    check_has_own(1, a20);
    check_has_own("-0", a20);
    check_has_own(-10, a20);
    check_has_own(1012, a20);
}
function test_with_no_protochain(a48) {
    const v52 = new Int32Array(1000);
    var a = v52.fill(1);
    warmup(a);
    check_assertions(a);
}
function test_with_protochain(a58) {
    const v62 = new Int32Array(1000);
    var a = v62.fill(1);
    warmup(a);
    const t31 = Object.prototype;
    t31["-0"] = "value";
    const t34 = Object.prototype;
    t34[-1] = "value";
    const t36 = Object.prototype;
    t36[-10] = "value";
    const t38 = Object.prototype;
    t38[1012] = "value";
    check_assertions(a);
}
test_with_no_protochain();
test_with_protochain();
