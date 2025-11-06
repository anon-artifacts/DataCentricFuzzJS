class C0 {
}
class C2 {
    [C0] = 1073741823;
}
function f3() {
    let v4 = 0;
    for (let i6 = 0; i6 < 1; ++i6) {
        v4++;
    }
    return 1073741823;
}
for (let i25 = (() => {
        function f14() {
            var args = arguments;
            return args[0] + args[1];
        }
        try { noInline(0, C0, 1073741823, noInline, noInline); } catch (e) {}
        for (let v22 = 0; v22 < 50; v22++) {
            f14(v22, v22);
        }
        return 0;
    })();
    i25 < 200000;
    ++i25) {
    f3();
}
0 != 200000;
