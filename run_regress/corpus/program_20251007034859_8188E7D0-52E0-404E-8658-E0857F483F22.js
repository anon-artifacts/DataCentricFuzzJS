function TestSmi() {
    var v_0 = {};
    function f_0(a4, a5) {
        var v_2 = { value: 0 };
        v_4 = a5(a4, 1073741823, v_0, v_2);
        v_2.value;
    }
    function f_1(a15, a16, a17, a18) {
        const v19 = new a15(a16, a17, a18);
        if (!v19) {
        }
    }
    function f_10(a22) {
        f_0(a22, f_1);
        f_0(a22, f_1);
        f_0(a22, f_1);
    }
    function f_12(a27, a28, a29) {
        let v30 = a29.value;
        v30++;
    }
    f_10(f_12);
}
TestSmi();
function TestHeapNumber() {
    var v_0 = {};
    function f_0(a38, a39) {
        var v_2 = { value: 1.5 };
        v_4 = a39(a38, 1073741823, v_0, v_2);
        v_2.value;
    }
    function f_1(a49, a50, a51, a52) {
        const v53 = new a49(a50, a51, a52);
        if (!v53) {
        }
    }
    function f_10(a56) {
        f_0(a56, f_1);
        f_0(a56, f_1);
        f_0(a56, f_1);
    }
    function f_12(a61, a62, a63) {
        let v64 = a63.value;
        v64++;
    }
    f_10(f_12);
}
TestHeapNumber();
