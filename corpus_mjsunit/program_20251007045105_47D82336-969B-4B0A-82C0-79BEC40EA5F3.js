function TestConstants() {
    var o = { p: 1, p: 2 };
    o.p;
}
TestConstants();
function TestMaterialized() {
    const v10 = [1];
    const v12 = [2];
    var o = { p: v10, p: v12 };
    o.p[0];
}
TestMaterialized();
function TestMaterialize2() {
    function f20() {
    }
    var o = { p: f20, p: 2 };
    o.p;
}
TestMaterialize2();
function TestComputed() {
    function f28() {
        return 1;
    }
    const v30 = f28();
    function f31() {
        return 2;
    }
    const v33 = f31();
    var o = { p: v30, p: v33 };
    o.p;
}
TestComputed();
function TestComputed2() {
    function f40() {
        return 1;
    }
    const v42 = f40();
    var o = { p: v42, p: 2 };
    o.p;
}
TestComputed2();
function TestGetter() {
    const v54 = {
        get p() {
            return 1;
        },
        get p() {
            return 2;
        },
    };
    var o = v54;
    o.p;
}
TestGetter();
function TestGetterSetter() {
    const v64 = {
        get p() {
            return 1;
        },
        set p(a63) {
        },
    };
    var o = v64;
    o.p;
    const v72 = {
        set p(a69) {
        },
        get p() {
            return 2;
        },
    };
    (o = v72).p;
}
TestGetterSetter();
function TestCombined() {
    const v80 = {
        get p() {
            return 1;
        },
        p: 2,
    };
    var o = v80;
    o.p;
    const v89 = {
        get p() {
            return 1;
        },
        p: 2,
        get p() {
            return 3;
        },
    };
    o = v89;
    o.p;
    const v97 = {
        get p() {
            return 1;
        },
        p: 2,
        set p(a96) {
        },
    };
    o = v97;
    o.p;
}
TestCombined();
