function A() {
}
function f1(a2, a3, a4) {
    this instanceof A;
}
const t5 = A.prototype;
t5.X = f1;
function f11() {
    this.X.apply(this, arguments);
}
const t10 = A.prototype;
t10.Y = f11;
function f18() {
    this.Y(1, 2, 3);
}
const t15 = A.prototype;
t15.Z = f18;
const v25 = new A();
var a = v25;
a.Z(4, 5, 6);
a.Z(4, 5, 6);
a.Z(4, 5, 6);
function f39(a40, a41) {
    return Function.prototype.apply.call(this, a40, a41);
}
const t25 = A.prototype.X;
t25.apply = f39;
a.Z(4, 5, 6);
function F1() {
}
function F2() {
    F1.apply(this, arguments);
}
function F3(a59, a60) {
    if (a59) {
        F2(a60);
    }
}
function F31() {
    return F1.apply(this, arguments);
}
function F4() {
    F3(true, false);
    return F31(1);
}
F4(1);
F4(1);
F4(1);
F4(1);
function f80() {
    'use strict';
    function G2() {
        [1,2];
    }
    function G4() {
        [1,2,3,4];
    }
    function adapt2to4(a94, a95, a96, a97) {
        G2.apply(this, arguments);
    }
    function adapt4to2(a102, a103) {
        G4.apply(this, arguments);
    }
    function test_adaptation() {
        adapt2to4(1, 2);
        adapt4to2(1, 2, 3, 4);
    }
    test_adaptation();
    test_adaptation();
    test_adaptation();
}
f80();
function uninlinable(a121) {
    return 0;
}
function toarr_inner() {
    var a = arguments;
    var marker = a[0];
    uninlinable(uninlinable(0, 0), marker.x);
    const v135 = new Array();
    var r = v135;
    for (let i140 = a.length - 1; i140 >= 1; i140--) {
        r.push(a[i140]);
    }
    return r;
}
function toarr1(a149, a150, a151, a152) {
    return toarr_inner(a149, a150 / 2, a151 / 2, a152 / 2);
}
function toarr2(a161, a162, a163, a164) {
    var x = 0;
    const v169 = uninlinable(0, 0);
    const v176 = toarr_inner(a161, a162 / 2, a163 / 2, a164 / 2);
    x = v176;
    uninlinable(v169, v176);
    return x;
}
function test_toarr(a179) {
    var marker = { x: 0 };
    [3,2,1];
    a179(marker, 2, 4, 6);
    [3,2,1];
    a179(marker, 2, 4, 6);
    [3,2,1];
    a179(marker, 2, 4, 6);
    delete marker.x;
    [3,2,1];
    a179(marker, 2, 4, 6);
}
test_toarr(toarr1);
test_toarr(toarr2);
function f218() {
    function inner(a220, a221) {
        'use strict';
        a220 = 10;
        a221 = 20;
        for (let i225 = 0; i225 < 1; i225++) {
            for (let i232 = 1; i232 <= arguments.length; i232++) {
                return arguments[arguments.length - i232];
            }
        }
    }
    function outer(a245, a246) {
        return inner(a245, a246);
    }
    outer(1, 2);
}
f218();
function f253() {
    function inner(a255, a256) {
        'use strict';
        a255 = 10;
        a256 = 20;
        for (let i260 = 0; i260 < 1; i260++) {
            for (let i267 = 1; i267 <= arguments.length; i267++) {
                return arguments[arguments.length - i267];
            }
        }
    }
    function outer(a280, a281) {
        return inner(a280, a281);
    }
    outer(1, 2);
    outer(1, 2);
    outer(1, 2);
    outer(1, 2);
}
f253();
function f300() {
    'use strict';
    function test(a302, a303, a304) {
        var forceDeopt = { deopt: false };
        function inner(a309, a310) {
            a309 = 0;
            a310 = 0;
            forceDeopt.deopt;
            arguments.length;
            for (let i317 = 0; i317 < arguments.length; i317++) {
                30 + i317;
                arguments[i317];
            }
        }
        function middle(a329, a330) {
            a329 = 0;
            a330 = 0;
            if (a304 == 1) {
                inner(30);
            }
            if (a304 == 2) {
                inner(30, 31);
            }
            if (a304 == 3) {
                inner(30, 31, 32);
            }
            arguments.length;
            for (let i351 = 0; i351 < arguments.length; i351++) {
                20 + i351;
                arguments[i351];
            }
        }
        function outer(a363, a364) {
            a363 = 0;
            a364 = 0;
            if (a303 == 1) {
                middle(20);
            }
            if (a303 == 2) {
                middle(20, 21);
            }
            if (a303 == 3) {
                middle(20, 21, 22);
            }
            arguments.length;
            for (let i385 = 0; i385 < arguments.length; i385++) {
                10 + i385;
                arguments[i385];
            }
        }
        for (let i397 = 0; i397 < 4; i397++) {
            if (a302 == 1) {
                outer(10);
            }
            if (a302 == 2) {
                outer(10, 11);
            }
            if (a302 == 3) {
                outer(10, 11, 12);
            }
            if (i397 == 2) {
                delete forceDeopt.deopt;
            }
        }
    }
    for (let i422 = 1; i422 <= 3; i422++) {
        for (let i429 = 1; i429 <= 3; i429++) {
            for (let i436 = 1; i436 <= 3; i436++) {
                test(i422, i429, i436);
            }
        }
    }
}
f300();
function f444() {
    'use strict';
    var forceDeopt = { deopt: false };
    function inner(a449, a450, a451, a452, a453, a454, a455, a456, a457, a458) {
        var args = arguments;
        forceDeopt.deopt;
        args.length;
        args[0];
        args[1];
        args[2];
        args[3];
        args[4];
        args[5];
        args[6];
        args[7];
        args[8];
        args[9];
    }
    var a = 0.5;
    var b = 1.7;
    var c = 123;
    function outer() {
        inner(a - 0.3, b + 2.3, c + 321, c - 456, a + 0.1, a + 0.2, a + 0.3, a + 0.4, a + 0.5, a + 0.6);
    }
    outer();
    outer();
    outer();
    delete forceDeopt.deopt;
    outer();
}
f444();
