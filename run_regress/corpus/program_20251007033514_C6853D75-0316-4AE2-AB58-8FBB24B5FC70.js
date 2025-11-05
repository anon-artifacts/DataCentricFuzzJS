function f0() {
    var initial_P = "prototype";
    var P = initial_P;
    var H = "hasOwnProperty";
    function f6() {
    }
    var f = f6;
    function prototypeTest(a9) {
        for (let i11 = 0; i11 < 10; i11++) {
            var property = f[P];
            if (i11 <= a9) {
                f.prototype;
            } else {
                f.hasOwnProperty;
            }
            if (i11 == a9) {
                P = H;
            }
        }
        P = initial_P;
    }
    for (let i24 = 0; i24 < 10; i24++) {
        prototypeTest(i24);
    }
    f.prototype = 43;
    for (let i33 = 0; i33 < 10; i33++) {
        prototypeTest(i33);
    }
}
var runTest = f0;
runTest();
function f42() {
    var initial_L = "length";
    var L = initial_L;
    var zero = "0";
    const v50 = new Array(10);
    var a = v50;
    function arrayLengthTest(a53) {
        for (let i55 = 0; i55 < 10; i55++) {
            var l = a[L];
            if (i55 <= a53) {
            } else {
            }
            if (i55 == a53) {
                L = zero;
            }
        }
        L = initial_L;
    }
    for (let i68 = 0; i68 < 10; i68++) {
        arrayLengthTest(i68);
    }
}
runTest = f42;
runTest();
function f76() {
    var initial_L = "length";
    var L = initial_L;
    var zero = "0";
    var s = "asdf";
    function stringLengthTest(a85) {
        for (let i87 = 0; i87 < 10; i87++) {
            var l = s[L];
            if (i87 <= a85) {
            } else {
            }
            if (i87 == a85) {
                L = zero;
            }
        }
        L = initial_L;
    }
    for (let i100 = 0; i100 < 10; i100++) {
        stringLengthTest(i100);
    }
}
runTest = f76;
runTest();
function f108() {
    var o = { x: 42, y: 43 };
    var initial_X = "x";
    var X = initial_X;
    var Y = "y";
    function fieldTest(a119) {
        for (let i121 = 0; i121 < 10; i121++) {
            var property = o[X];
            if (i121 <= a119) {
            } else {
            }
            if (i121 == a119) {
                X = Y;
            }
        }
        X = initial_X;
    }
    for (let i134 = 0; i134 < 10; i134++) {
        fieldTest(i134);
    }
}
runTest = f108;
runTest();
function f142() {
    var o = [42,43];
    var initial_X = 0;
    var X = initial_X;
    var Y = 1;
    function fieldTest(a153) {
        for (let i155 = 0; i155 < 10; i155++) {
            var property = o[X];
            if (i155 <= a153) {
            } else {
            }
            if (i155 == a153) {
                X = Y;
            }
        }
        X = initial_X;
    }
    for (let i168 = 0; i168 < 10; i168++) {
        fieldTest(i168);
    }
}
runTest = f142;
runTest();
function f176() {
    function fun() {
    }
    const v179 = new Object();
    var o = v179;
    o.f = fun;
    o.x = 42;
    var initial_F = "f";
    var F = initial_F;
    var X = "x";
    function constantFunctionTest(a188) {
        for (let i190 = 0; i190 < 10; i190++) {
            var property = o[F];
            if (i190 <= a188) {
                fun();
            } else {
            }
            if (i190 == a188) {
                F = X;
            }
        }
        F = initial_F;
    }
    for (let i203 = 0; i203 < 10; i203++) {
        constantFunctionTest(i203);
    }
}
runTest = f176;
runTest();
function f211() {
    var o = { x: 42, y: 43 };
    var initial_X = "x";
    var X = initial_X;
    var Y = "y";
    function fieldTest(a222) {
        for (let i224 = 0; i224 < 10; i224++) {
            o[X] = X;
            var property = o[X];
            if (i224 <= a222) {
            } else {
            }
            if (i224 == a222) {
                X = Y;
            }
        }
        X = initial_X;
    }
    for (let i237 = 0; i237 < 10; i237++) {
        fieldTest(i237);
    }
}
runTest = f211;
runTest();
