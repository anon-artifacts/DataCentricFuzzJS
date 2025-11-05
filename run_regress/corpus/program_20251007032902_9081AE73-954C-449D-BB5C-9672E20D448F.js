try {
    function f0() {
    }
    var undetectable = f0;
    var tests = [true,false,false,false,null,true,void 0,true,0,false,0,false,-0,false,"",false,-1,false,-1.25,false,1,false,1.25,false,-2147483648,false,2147483648,false,Infinity,false,-Infinity,false,NaN,false];
    function eq(a44) {
        return a44 == undetectable;
    }
    var func = eq;
    function eq_L0() {
        return true == undetectable;
    }
    function eq_L1() {
        return false == undetectable;
    }
    function eq_L2() {
        return null == undetectable;
    }
    function eq_L3() {
        return void 0 == undetectable;
    }
    function eq_L4() {
        return 0 == undetectable;
    }
    function eq_L5() {
        return 0 == undetectable;
    }
    function eq_L6() {
        return -0 == undetectable;
    }
    function eq_L7() {
        return "" == undetectable;
    }
    function eq_L8() {
        return -1 == undetectable;
    }
    function eq_L9() {
        return -1.25 == undetectable;
    }
    function eq_L10() {
        return 1 == undetectable;
    }
    function eq_L11() {
        return 1.25 == undetectable;
    }
    function eq_L12() {
        return -2147483648 == undetectable;
    }
    function eq_L13() {
        return 2147483648 == undetectable;
    }
    function eq_L14() {
        return Infinity == undetectable;
    }
    function eq_L15() {
        return -Infinity == undetectable;
    }
    function eq_L16() {
        return NaN == undetectable;
    }
    var left_funcs = [eq_L0,eq_L1,eq_L2,eq_L3,eq_L4,eq_L5,eq_L6,eq_L7,eq_L8,eq_L9,eq_L10,eq_L11,eq_L12,eq_L13,eq_L14,eq_L15,eq_L16];
    function eq_R0() {
        return undetectable == true;
    }
    function eq_R1() {
        return undetectable == false;
    }
    function eq_R2() {
        return undetectable == null;
    }
    function eq_R3() {
        return undetectable == void 0;
    }
    function eq_R4() {
        return undetectable == 0;
    }
    function eq_R5() {
        return undetectable == 0;
    }
    function eq_R6() {
        return undetectable == -0;
    }
    function eq_R7() {
        return undetectable == "";
    }
    function eq_R8() {
        return undetectable == -1;
    }
    function eq_R9() {
        return undetectable == -1.25;
    }
    function eq_R10() {
        return undetectable == 1;
    }
    function eq_R11() {
        return undetectable == 1.25;
    }
    function eq_R12() {
        return undetectable == -2147483648;
    }
    function eq_R13() {
        return undetectable == 2147483648;
    }
    function eq_R14() {
        return undetectable == Infinity;
    }
    function eq_R15() {
        return undetectable == -Infinity;
    }
    function eq_R16() {
        return undetectable == NaN;
    }
    var right_funcs = [eq_R0,eq_R1,eq_R2,eq_R3,eq_R4,eq_R5,eq_R6,eq_R7,eq_R8,eq_R9,eq_R10,eq_R11,eq_R12,eq_R13,eq_R14,eq_R15,eq_R16];
    function test() {
        for (let i161 = 0; i161 < tests.length; i161 += 2) {
            var val = tests[tests];
            i161 + 1;
            var eq = tests[tests];
            try { eq(); } catch (e) {}
            val == undetectable;
            try { eq(); } catch (e) {}
            undetectable == val;
            val === undetectable;
            undetectable === val;
            try { eq(); } catch (e) {}
            i161 / 2;
            left_funcs[left_funcs]();
            try { eq(); } catch (e) {}
            i161 / 2;
            right_funcs[right_funcs]();
        }
        undetectable == undetectable;
        undetectable === undetectable;
    }
    for (let i190 = 0; i190 < 5; i190++) {
        test();
    }
    function f197() {
    }
    undetectable == f197;
    function f199() {
    }
    undetectable === f199;
    function test2(a202, a203) {
        return a202 == a203;
    }
    test2(0, 1);
    test2(undetectable, {});
    for (let i211 = 0; i211 < 5; ++i211) {
        function f217() {
        }
        test2(undetectable, f217);
    }
} catch(e219) {
}
