function f0() {
}
function literals_sharing_test(a2, a3) {
    function closure() {
        var a = [1,2,3];
        if (a2) {
            a.push(1.3);
        }
    }
    closure();
}
function test() {
    var warmup = true;
    for (let i18 = 0; i18 < 3; i18++) {
        f0((("iter: " + i18) + ", warmup: ") + warmup);
        literals_sharing_test(warmup, false);
        warmup = false;
    }
    const v37 = ("iter: " + i) + ", opt: true";
    try { f0(v37); } catch (e) {}
    try { literals_sharing_test(warmup, true); } catch (e) {}
}
try { test(); } catch (e) {}
